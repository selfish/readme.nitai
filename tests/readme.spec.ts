import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const viewports = [
  { name: "narrow", width: 320, height: 568 },
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 900 },
  { name: "desktop", width: 1440, height: 1000 },
];

const relativeLuminance = ([red, green, blue]: number[]) => {
  const channels = [red, green, blue].map((channel) => {
    const value = channel / 255;
    return value <= 0.04045
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4);
  });

  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
};

const contrastRatio = (foreground: number[], background: number[]) => {
  const lighter = Math.max(
    relativeLuminance(foreground),
    relativeLuminance(background),
  );
  const darker = Math.min(
    relativeLuminance(foreground),
    relativeLuminance(background),
  );
  return (lighter + 0.05) / (darker + 0.05);
};

test("exposes a source-bounded leadership and engineering draft", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Unpublished draft — Nitai Perez README");
  await expect(
    page.getByRole("heading", { level: 1, name: "Nitai Perez" }),
  ).toBeVisible();
  await expect(
    page.getByText(
      "I build engineering organizations that can think for themselves.",
    ),
  ).toBeVisible();
  await expect(page.getByRole("heading", { level: 2 })).toHaveCount(3);
  await expect(page.getByRole("heading", { level: 3 })).toHaveCount(3);
  await expect(page.locator(".principle")).toHaveCount(3);
  await expect(page.locator(".principle .prose-columns p")).toHaveCount(6);
  await expect(page.locator(".contract-row")).toHaveCount(5);
  await expect(page.locator(".questions li")).toHaveCount(8);
  await expect(
    page.getByText("Running a team of leaders", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText(
      "Ownership is the architecture; the software ships as a side effect.",
      { exact: true },
    ),
  ).toBeVisible();

  const body = await page.locator("body").innerText();
  for (const unapprovedClaim of [
    "I care about",
    "I think ownership",
    "I want risks",
    "I prefer small",
  ]) {
    expect(body).not.toContain(unapprovedClaim);
  }
});

test("preserves Georgia while retiring the generic initials mark", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".wordmark")).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Nitai Perez — back to the top" }),
  ).toContainText("Nitai Perez");
  const thesisFont = await page
    .locator(".thesis")
    .evaluate((element) => getComputedStyle(element).fontFamily);
  expect(thesisFont).toContain("Georgia");
});

test("keeps small utility text at AA contrast", async ({ page }) => {
  await page.goto("/");
  const colors = await page.locator(".edition").evaluate((element) => {
    const parseRgb = (value: string) =>
      value.startsWith("#")
        ? [...value.slice(1).matchAll(/.{2}/g)].map(([hex]) =>
            Number.parseInt(hex, 16),
          )
        : value.match(/\d+/g)!.slice(0, 3).map(Number);
    const style = getComputedStyle(element);
    const root = getComputedStyle(document.documentElement);
    return {
      foreground: parseRgb(style.color),
      backgrounds: [
        parseRgb(root.getPropertyValue("--paper").trim()),
        parseRgb(root.getPropertyValue("--paper-grid").trim()),
      ],
    };
  });

  for (const background of colors.backgrounds) {
    expect(contrastRatio(colors.foreground, background)).toBeGreaterThanOrEqual(
      4.5,
    );
  }
});

test("uses a materially denser desktop opening", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const geometry = await page.evaluate(() => {
    const hero = document.querySelector<HTMLElement>(".hero")!;
    const thinking = document.querySelector<HTMLElement>("#thinking")!;
    const heroRect = hero.getBoundingClientRect();
    const thinkingRect = thinking.getBoundingClientRect();
    return {
      heroHeight: heroRect.height,
      heroBottom: heroRect.bottom,
      thinkingTop: thinkingRect.top,
    };
  });
  expect(geometry.heroHeight).toBeLessThan(760);
  expect(geometry.heroBottom).toBeLessThan(900);
  expect(geometry.thinkingTop).toBeLessThan(900);
});

test("keeps the unapproved draft out of search indexes", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByText("Draft for discussion — not published"),
  ).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://readme.nit.ai/",
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://readme.nit.ai/",
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "Unpublished draft — Nitai Perez README",
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /unpublished, approval-gated design and copy draft/i,
  );
});

test("keeps proposed links reviewable without asserting identity approval", async ({
  page,
}) => {
  await page.goto("/");
  const expectedLinks = [
    ["Personal site", "https://nit.ai"],
    ["GitHub", "https://github.com/selfish"],
    ["LinkedIn", "https://www.linkedin.com/in/nitaijperez"],
  ] as const;

  for (const [label, href] of expectedLinks) {
    const link = page.getByRole("link", { name: label });
    await expect(link).toHaveAttribute("href", href);
    await expect(link).toHaveAttribute("rel", "noreferrer");
  }
});

test("preserves ordered-list semantics after removing visual markers", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("list")).toHaveCount(3);
  await expect(page.locator('ol[role="list"]')).toHaveCount(3);
});

for (const viewport of viewports) {
  test(`has no overflow or detectable accessibility violations at ${viewport.name}`, async ({
    page,
  }) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });
    await page.goto("/");
    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth).toBe(dimensions.clientWidth);

    const accessibility = await new AxeBuilder({ page }).analyze();
    expect(accessibility.violations).toEqual([]);
  });

  test(`captures the ${viewport.name} review surface`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });
    await page.goto("/");
    const screenshotPath = testInfo.outputPath(`readme-${viewport.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    await testInfo.attach(`readme-${viewport.name}`, {
      path: screenshotPath,
      contentType: "image/png",
    });
  });
}

test("keeps question-matrix column headers available on mobile", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const contract = page.getByRole("table", {
    name: "Questions for a future working contract",
  });
  await expect(contract.getByRole("columnheader")).toHaveCount(3);
  for (const heading of [
    "Situation",
    "Questions for Nitai",
    "Questions for teammates",
  ]) {
    await expect(
      contract.getByRole("columnheader", { name: heading }),
    ).toHaveCount(1);
  }
});

test("supports keyboard navigation and reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await expect(page).toHaveURL(/#main$/);
  const behavior = await page.evaluate(
    () => getComputedStyle(document.documentElement).scrollBehavior,
  );
  expect(behavior).toBe("auto");
});

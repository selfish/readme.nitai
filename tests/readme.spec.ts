import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const viewports = [
  { name: "narrow", width: 320, height: 720 },
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 900 },
  { name: "desktop", width: 1440, height: 1000 },
];

test("exposes the leadership README as semantic content", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("README — Nitai Perez");
  await expect(
    page.getByRole("heading", { level: 1, name: "Nitai Perez" }),
  ).toBeVisible();
  await expect(
    page.getByText(
      "I build engineering organizations that can think for themselves.",
    ),
  ).toBeVisible();
  await expect(page.getByRole("heading", { level: 2 })).toHaveCount(4);
  await expect(page.getByRole("link", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/selfish",
  );
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
});

test("keeps every proposed identity link explicit and reviewable", async ({
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
    await expect(link).toHaveAttribute("rel", "me noreferrer");
  }
});

for (const viewport of viewports) {
  test(`has no horizontal overflow at ${viewport.name}`, async ({ page }) => {
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

test("has no automatically detectable accessibility violations", async ({
  page,
}) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
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

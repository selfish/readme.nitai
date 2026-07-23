import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { mkdir } from "node:fs/promises";

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
    await mkdir("artifacts", { recursive: true });
    const screenshotPath = `artifacts/readme-${viewport.name}.png`;
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
  const behavior = await page.evaluate(
    () => getComputedStyle(document.documentElement).scrollBehavior,
  );
  expect(behavior).toBe("auto");
});

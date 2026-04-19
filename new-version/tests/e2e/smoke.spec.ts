import { test, expect } from "@playwright/test";

const routes = [
  { path: "/", name: "Home" },
  { path: "/buerger", name: "Bürger" },
  { path: "/politiker", name: "Politiker" },
  { path: "/wahlometer", name: "Wahlometer" },
  { path: "/ueber-uns", name: "Über uns" },
  { path: "/impressum", name: "Impressum" },
  { path: "/datenschutz", name: "Datenschutz" },
  { path: "/nutzungsbedingungen", name: "Nutzungsbedingungen" },
  { path: "/faq", name: "FAQ" },
  { path: "/spenden", name: "Spenden" },
  { path: "/engineering", name: "Engineering" },
  { path: "/kontakt", name: "Kontakt" },
  { path: "/blog", name: "Blog" },
  { path: "/blog/news-38-weihnachtsbrief-25", name: "Blog-Artikel" },
  { path: "/presse", name: "Presse" },
];

for (const route of routes) {
  test(`${route.name} (${route.path}) loads without errors`, async ({ page }) => {
    const jsErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        jsErrors.push(msg.text());
      }
    });
    page.on("pageerror", (err) => {
      jsErrors.push(`pageerror: ${err.message}`);
    });

    const response = await page.goto(route.path);
    expect(response?.status()).toBe(200);

    // Page should have content (not blank)
    await expect(page.locator("body")).not.toBeEmpty();

    // No JavaScript console errors or uncaught exceptions
    expect(jsErrors).toEqual([]);
  });
}

test("404 page renders for unknown routes", async ({ page }) => {
  const jsErrors: string[] = [];
  page.on("pageerror", (err) => {
    jsErrors.push(`pageerror: ${err.message}`);
  });

  const response = await page.goto("/nonexistent-page-xyz");
  // Next.js static export serves the exported 404 page with HTTP 404
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
  expect(jsErrors).toEqual([]);
});

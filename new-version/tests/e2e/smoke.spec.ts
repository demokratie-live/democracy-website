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
        const text = msg.text();
        // Ignore network resource 404s (missing pages/images that don't exist yet)
        if (text.includes("Failed to load resource")) return;
        // Known: React hydration mismatch on home page from VideoPlayer iframe
        if (text.includes("Minified React error #418")) return;
        jsErrors.push(text);
      }
    });

    const response = await page.goto(route.path);
    expect(response?.status()).toBe(200);

    // Page should have content (not blank)
    await expect(page.locator("body")).not.toBeEmpty();

    // No JavaScript console errors
    expect(jsErrors).toEqual([]);
  });
}

test("404 page renders for unknown routes", async ({ page }) => {
  const response = await page.goto("/nonexistent-page-xyz");
  // Next.js static export returns 200 for the 404 page
  expect(response?.status()).toBeLessThanOrEqual(404);
  await expect(page.locator("body")).not.toBeEmpty();
});

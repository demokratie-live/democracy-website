import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load successfully and display hero section', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/DEMOCRACY/i);

    // Check hero section
    const h1 = page.locator('h1');
    await expect(h1).toContainText('DEMOCRACY');

    // Check slogan
    await expect(page.getByText('Weil deine Stimme zählt!')).toBeVisible();
  });

  test('should display App Store and Google Play badges', async ({ page }) => {
    await page.goto('/');

    // App Store badge
    const appStoreBadge = page.locator('img[alt="Download on the App Store"]');
    await expect(appStoreBadge).toBeVisible();

    // Google Play badge
    const googlePlayBadge = page.locator('img[alt="Get it on Google Play"]');
    await expect(googlePlayBadge).toBeVisible();
  });

  test('should display YouTube video section', async ({ page }) => {
    await page.goto('/');

    // Video section heading
    await expect(page.getByText('Worum geht es bei DEMOCRACY (2:30)?')).toBeVisible();

    // YouTube iframe
    const iframe = page.locator('iframe[src*="youtube.com"]');
    await expect(iframe).toBeVisible();
  });

  test('should display 5 interactive feature badges', async ({ page }) => {
    await page.goto('/');

    // Section heading
    await expect(page.getByText('Alle Funktionen von DEMOCRACY')).toBeVisible();

    // 5 feature badges - use button locator to avoid slogan text conflict
    const featureButtons = page.locator('button').filter({ has: page.locator('span.font-bold') });
    await expect(featureButtons).toHaveCount(5);

    // Verify specific feature titles exist
    await expect(page.locator('button').filter({ hasText: 'Wähle' })).toBeVisible();
    await expect(page.locator('button').filter({ hasText: 'Informiere' })).toBeVisible();
    await expect(page.locator('button').filter({ hasText: 'Vergleiche' })).toBeVisible();
    await expect(page.locator('button').filter({ hasText: 'Analysiere' })).toBeVisible();
  });

  test('should switch video when clicking feature badges', async ({ page }) => {
    await page.goto('/');

    // Get initial video source
    const video = page.locator('video');
    await expect(video).toBeVisible();

    // Click on second feature badge (Informiere)
    const informButton = page.locator('button').filter({ hasText: 'Informiere' });
    await informButton.click();

    // Verify video source changed
    const source = video.locator('source');
    await expect(source).toHaveAttribute('src', /DDW-info/);
  });

  test('should display target audience cards', async ({ page }) => {
    await page.goto('/');

    // Section heading
    await expect(page.getByText('Für wen ist DEMOCRACY?')).toBeVisible();

    // Citizens card
    await expect(page.getByText('Für Bürger,')).toBeVisible();

    // Politicians card
    await expect(page.getByText('Für Politiker,')).toBeVisible();

    // Links to subpages
    const buergerLink = page.locator('a[href="/buerger"]');
    await expect(buergerLink).toBeVisible();

    const politikerLink = page.locator('a[href="/politiker"]');
    await expect(politikerLink).toBeVisible();
  });

  test('should display press logos section', async ({ page }) => {
    await page.goto('/');

    // Section heading
    await expect(page.getByText('bekannt aus')).toBeVisible();

    // Press logos (check for external links)
    const pressLogos = page.locator('a[target="_blank"]').filter({
      has: page.locator('img[alt*="Logo"]'),
    });
    await expect(pressLogos).toHaveCount(4);
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Hero should still be visible
    await expect(page.locator('h1')).toContainText('DEMOCRACY');

    // Content should be stacked (check that elements are visible)
    await expect(page.getByText('Weil deine Stimme zählt!')).toBeVisible();
  });
});

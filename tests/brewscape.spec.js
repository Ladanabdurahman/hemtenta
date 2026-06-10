import { test, expect } from '@playwright/test';

test('Användaren kan öppna Brewscape-sidan', async ({ page }) => {
  await page.goto('https://mt-brewscape.lovable.app/');

  await expect(page).toHaveURL(/mt-brewscape/);
  await expect(page.locator('body')).toBeVisible();
});

test('Användaren kan klicka på en synlig knapp eller länk', async ({ page }) => {
  await page.goto('https://mt-brewscape.lovable.app/');

  const clickable = page.locator('button:visible, a:visible').nth(1);

  await expect(clickable).toBeVisible();
  await clickable.click();

  await expect(page.locator('body')).toBeVisible();
});

test('Sidan innehåller Brewscape-relaterat innehåll', async ({ page }) => {
  await page.goto('https://mt-brewscape.lovable.app/');

  await expect(page.locator('body')).toContainText(/Brewscape|coffee|kaffe|produkt|testprojekt/i);
});

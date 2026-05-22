import { test, expect } from '@playwright/test';

test('Startsidan laddas', async ({ page }) => {
  await page.goto('https://mt-brewscape.lovable.app/');

  await expect(page.locator('body')).toBeVisible();
});

test('Användaren kan navigera på sidan', async ({ page }) => {
  await page.goto('https://mt-brewscape.lovable.app/');

  await expect(page.locator('body')).toContainText(/testprojekt|brew/i);
});

test('Produkter visas på sidan', async ({ page }) => {
  await page.goto('https://mt-brewscape.lovable.app/');

  await expect(page.locator('body')).toContainText(/coffee|brew|produkt/i);
});
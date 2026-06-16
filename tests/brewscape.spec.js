import { test, expect } from '@playwright/test';

test('Användaren kan öppna Brewscape-sidan', async ({ page }) => {
  await page.goto('https://mt-brewscape.lovable.app/');

  // Kontrollera att rätt sida öppnas
  await expect(page).toHaveURL(/mt-brewscape/);

  // Kontrollera att Brewscape-loggan/länken visas
  await expect(
    page.getByRole('link', { name: 'Brewscape' }).first()
  ).toBeVisible();
});

test('Produktinformation kan inte öppnas från produktkort', async ({ page }) => {
  await page.goto('https://mt-brewscape.lovable.app/products');

  // Kontrollera att produkten visas
  const productTitle = page.getByText('Konisk kvarn');
  await expect(productTitle).toBeVisible();

  // Användaren försöker öppna produktinformationen
  await productTitle.click();

  // Ingen produktsida öppnas, användaren är fortfarande kvar på produktsidan
  await expect(page).toHaveURL(/products/);

  // Produktinformationen visas fortfarande på samma sida
  await expect(page.getByText(/malningslägen/i)).toBeVisible();
});

test('Produkter och produktinformation visas korrekt', async ({ page }) => {
  await page.goto('https://mt-brewscape.lovable.app/products');

  // Kontrollera att produktnamn visas
  await expect(page.getByText('Konisk kvarn')).toBeVisible();

  // Kontrollera att beskrivningen visas
  await expect(page.getByText(/malningslägen/i)).toBeVisible();

  // Kontrollera att priset visas
  await expect(page.getByText('1599 kr')).toBeVisible();
});

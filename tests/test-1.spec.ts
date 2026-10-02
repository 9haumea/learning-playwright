import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'Generating tests' }).click();
  await page.getByRole('link', { name: 'Running and debugging tests', exact: true }).click();
  await page.getByRole('img', { name: 'UI Mode', exact: true }).click();
});
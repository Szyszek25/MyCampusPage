import { test, expect } from '@playwright/test';

test.describe('MyCampus Landing Page', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page title is correct
    await expect(page).toHaveTitle(/MyCampus/);
    
    // Check if main heading is visible
    await expect(page.getByText(/Platforma.*dla studentów/i)).toBeVisible();
  });

  test('should display navigation bar', async ({ page }) => {
    await page.goto('/');
    
    // Check if logo is visible
    await expect(page.getByText('MyCampus')).toBeVisible();
    
    // Check if navigation links are present
    await expect(page.getByRole('button', { name: /zaloguj/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /zarejestruj/i })).toBeVisible();
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    
    // Check if hero content is visible
    await expect(page.getByText(/Dołącz do MyCampus/i)).toBeVisible();
    
    // Check if CTA button is visible
    await expect(page.getByRole('button', { name: /Dołącz do MyCampus/i })).toBeVisible();
  });

  test('should display events section', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to events section
    await page.getByText(/Nadchodzące wydarzenia/i).scrollIntoViewIfNeeded();
    
    // Check if events section is visible
    await expect(page.getByText(/Nadchodzące wydarzenia/i)).toBeVisible();
  });

  test('should display categories section', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to categories section
    await page.getByText(/Odkryj kategorie/i).scrollIntoViewIfNeeded();
    
    // Check if categories section is visible
    await expect(page.getByText(/Odkryj kategorie/i)).toBeVisible();
    
    // Check if at least one category is visible
    await expect(page.getByText(/Tech & IT|Muzyka|Sport/i)).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');
    
    // Check if content is still visible on mobile
    await expect(page.getByText(/MyCampus/i)).toBeVisible();
    await expect(page.getByText(/Platforma.*dla studentów/i)).toBeVisible();
  });
});


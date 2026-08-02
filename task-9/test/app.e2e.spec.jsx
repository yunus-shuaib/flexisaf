import { test, expect } from '@playwright/test';

test.describe('User Flow E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load main page and navigate through navigation bar', async ({ page }) => {
    await expect(page.getByText('UserHub')).toBeVisible();
    await expect(page.getByRole('heading', { name: /available users/i })).toBeVisible();

    // Click 'Search' in Navbar
    await page.getByRole('button', { name: /search/i }).click();
    await expect(page).toHaveURL('/users/search');
  });

  test('should complete end-to-end search to user profile journey', async ({ page }) => {
    // Navigate to Search page
    await page.getByRole('button', { name: 'Search' }).click();

    // Perform search
    const searchInput = page.getByLabelText(/search by name/i);
    await searchInput.fill('Emily');
    await page.getByRole('button', { name: 'Search' }).click();

    // Confirm navigation to profile view
    await expect(page).toHaveURL(/\/users\/\d+/);
    await expect(page.getByText(/email:/i)).toBeVisible();
  });

  test('should navigate to profile from user cards on homepage', async ({ page }) => {
    // Find the first "View Profile" button and click it
    const viewProfileButton = page.getByRole('button', { name: /view profile/i }).first();
    await viewProfileButton.click();

    await expect(page).toHaveURL(/\/users\/\d+/);
    await expect(page.getByText(/gender:/i)).toBeVisible();
  });

  test('should render 404 page on invalid route', async ({ page }) => {
    await page.goto('/some/invalid/route');

    await expect(page.getByRole('heading', { name: /page not found/i })).toBeVisible();

    await page.getByRole('button', { name: /go to homepage/i }).click();
    await expect(page).toHaveURL('/');
  });
});

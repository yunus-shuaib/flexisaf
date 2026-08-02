import { test, expect } from '@playwright/test';

test.describe('Profile Page Integration Tests', () => {
  test('should mock successful user profile API fetch', async ({ page }) => {
    // Intercept API call to dummyjson
    await page.route('https://dummyjson.com/users/1', async (route) => {
      const json = {
        id: 1,
        firstName: 'Terry',
        lastName: 'Medhurst',
        gender: 'male',
        age: 50,
        email: 'atneendog@loc.gov',
        address: { address: '1725 Slough Avenue', city: 'Scranton', state: 'PA' },
        company: { title: 'Regional Manager' }
      };
      await route.fulfill({ json });
    });

    await page.goto('/users/1');

    await expect(page.getByRole('heading', { name: 'Terry Medhurst' })).toBeVisible();
    await expect(page.getByText('1725 Slough Avenue, Scranton, PA')).toBeVisible();
    await expect(page.getByText('Regional Manager')).toBeVisible();
  });

  test('should handle API failure cleanly', async ({ page }) => {
    // Force a 404 response
    await page.route('https://dummyjson.com/users/9999', async (route) => {
      await route.fulfill({ status: 404 });
    });

    await page.goto('/users/9999');

    await expect(page.getByText(/user not found/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /go to homepage/i })).toBeVisible();
  });
});

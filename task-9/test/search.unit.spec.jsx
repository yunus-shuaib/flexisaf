import { test, expect } from '@playwright/experimental-ct-react';
import Search from '../../Search.jsx';
import { UsersContext } from '../../Context.jsx';
import { MemoryRouter } from 'react-router-dom';

test.describe('Search Component Unit Tests', () => {
  const mockUsers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Smith' },
  ];

  test('should render search input and button properly', async ({ mount }) => {
    const component = await mount(
      <MemoryRouter>
        <UsersContext.Provider value={{ users: mockUsers, isLoading: false }}>
          <Search />
        </UsersContext.Provider>
      </MemoryRouter>
    );

    await expect(component.getByLabelText(/search by name/i)).toBeVisible();
    await expect(component.getByRole('button', { name: /search/i })).toBeVisible();
  });

  test('should display loading state when isLoading is true', async ({ mount }) => {
    const component = await mount(
      <MemoryRouter>
        <UsersContext.Provider value={{ users: [], isLoading: true }}>
          <Search />
        </UsersContext.Provider>
      </MemoryRouter>
    );

    // MUI CircularProgress uses progressbar role
    await expect(component.getByRole('progressbar')).toBeVisible();
  });

  test('should display "User not Found" for invalid searches', async ({ mount }) => {
    const component = await mount(
      <MemoryRouter>
        <UsersContext.Provider value={{ users: mockUsers, isLoading: false }}>
          <Search />
        </UsersContext.Provider>
      </MemoryRouter>
    );

    await component.getByLabelText(/search by name/i).fill('NonExistentUser');
    await component.getByRole('button', { name: /search/i }).click();

    await expect(component.getByText(/user not found/i)).toBeVisible();
  });
});

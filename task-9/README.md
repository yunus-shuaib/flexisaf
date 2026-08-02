# Testing Concepts in React: Unit, Integration, and E2E Testing

This guide breaks down the core testing strategies used in modern Web Development, specifically covering **Unit Testing**, **Integration Testing**, and **End-to-End (E2E) Testing**, along with instructions on running tests across different developer environments.

---

## [Live](https://flexisaftask9.vercel.app/)

## Overview of Testing Types


```
## / 
/   \     E2E Tests (Fewest, Slowest, Highest Confidence)
/-----
/       \   Integration Tests (Balanced Speed & Confidence)
/---------
/           \ Unit Tests (Most, Fastest, Narrow Scope)
```

---

### 1. Unit Testing
* **What it is:** Testing individual units or components of your code in complete isolation from the rest of the app.
* **Focus:** Logic validation, component rendering based on props, component loading states, and edge cases.
* **Tooling Example:** `@playwright/experimental-ct-react`, `Vitest`, `React Testing Library`, or `Jest`.
* **Example Use Case:** Verifying that the `<Search />` component displays an input field and correctly shows `"User not Found"` when an empty query yields no matches.

Example unit test concept:
`test('renders search input', async ({ mount }) => { const component = await mount(<Search/>); await expect(component.getByLabelText(/search/i)).toBeVisible(); });`

---

### 2. Integration Testing
* **What it is:** Testing how multiple units, modules, or services work together. In frontend apps, this usually involves testing a component's interaction with mocked network requests (APIs) or React Context/State providers.
* **Focus:** API data fetching, context propagation, side effects, and state updates across connected components.
* **Tooling Example:** Playwright Route Mocking (`page.route`), MSW (Mock Service Worker).
* **Example Use Case:** Verifying that `<Profile />` correctly fetches data from `https://dummyjson.com/users/:id`, displays the loading spinner while fetching, and renders user details once the response resolves.

Example integration test concept:
`test('fetches user data from API', async ({ page }) => { await page.route('**/users/1', route => route.fulfill({ json: { firstName: 'Jane' } })); await page.goto('/users/1'); await expect(page.getByText('Jane')).toBeVisible(); });`

---

### 3. End-to-End (E2E) Testing
* **What it is:** Testing the entire user journey from start to finish in a real browser environment, mimicking actual user behavior.
* **Focus:** Full user flows, page routing, navigation, real backend integration, and end-to-end user interactions.
* **Tooling Example:** Playwright, Cypress.
* **Example Use Case:** Starting at `/`, clicking the search link in `<NavBar />`, typing a user name, submitting the search, and verifying that the app navigates automatically to `/users/:id`.

Example E2E test concept:
`test('full user journey', async ({ page }) => { await page.goto('/'); await page.getByRole('button', { name: /search/i }).click(); await page.getByLabelText(/search/i).fill('Emily'); await page.getByRole('button', { name: /search/i }).click(); await expect(page).toHaveURL(/\/users\/\d+/); });`

---

## Recommended Directory Structure

Separating tests by type keeps the source directory clean and helps configure different test runners easily.

```text
my-app/
├── src/
│   ├── components/
│   │   ├── Users.jsx
│   │   ├── Profile.jsx
│   │   ├── Search.jsx
│   │   └── NavBar.jsx
│   └── App.jsx
│
└── test/
    ├── search.unit.spec.jsx        # Unit / Component tests
    ├── profile.integration.spec.js # Integration tests
    └── app.e2e.spec.js             # End-to-End tests

```
## Test Runner Configurations & Environments
### Playwright Configuration (playwright.config.js)
Playwright uses a configuration file at the root level to locate test scripts and set up default environment behaviors:
import { defineConfig } from '@playwright/test'; export default defineConfig({ testDir: './test', use: { baseURL: 'http://localhost:5173' } });
## Running Tests
Ensure your development server is running (npm run dev) before executing browser-based tests.
| Environment / Command | Description |
|---|---|
| npx playwright test | Runs all tests headlessly (in background). |
| npx playwright test --ui | Opens Playwright's interactive testing UI dashboard. |
| npx playwright test --headed | Runs tests in a visible browser window. |
| npx playwright show-report | Views detailed HTML test reports. |


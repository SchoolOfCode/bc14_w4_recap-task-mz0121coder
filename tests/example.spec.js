const { test, expect } = require('@playwright/test');

/*- User navigates to the URL where the app is running
- User types a username/name into the "Name" input
- Input should now contain the name they've entered
- User types a tweet into the "Tweet" text area
- Text area should now contain the tweet they've entered
- User clicks on the "Send tweet!" button
- Both the input and text area should have been cleared, and a new entry should have been added to the list*/
test('send and clear tweet', async ({ page }) => {
	// User navigates to the URL where the app is running
	const url = 'http://localhost:3000';
	await page.goto(url);
	// User types a username/name into the "Name" input
	const nameInput = page.locator('input[name=tweeter]');
	await nameInput.type('CodeTester');
	// Input should now contain the name they've entered
	await expect(nameInput).toHaveValue('CodeTester');
	// User types a tweet into the "Tweet" text area
	const textbox = page.locator('textarea[name=tweet]');
});

/*
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
*/

const { test, expect } = require('@playwright/test');

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
	await textbox.type('Hello coders and testers');
	// Text area should now contain the tweet they've entered
	await expect(textbox).toHaveValue('Hello coders and testers');
	// User clicks on the "Send tweet!" button
	const sendTweet = page.getByRole('button', { name: 'Send Tweet!' });
	await sendTweet.click();
	// Check input and textarea are now cleared
	await expect(nameInput).toHaveValue('');
	await expect(textbox).toHaveValue('');
	// Check tweets list ends with the added tweet
	const tweetsList = page.locator('ul');
	await expect(tweetsList).toHaveText(/CodeTester Hello coders and testers$/);
});

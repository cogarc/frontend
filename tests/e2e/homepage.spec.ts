import { test, expect } from '@playwright/test';

test('homepage loads and displays all features', async ({ page }) => {
  await page.goto('/');

  // Check that the main title is visible
  await expect(page.getByRole('heading', { name: /Welcome to CogArc/i })).toBeVisible();

  // Check that all 6 feature cards are present
  await expect(page.getByText(/Multi-modal Demos/i)).toBeVisible();
  await expect(page.getByText(/Agentic Systems/i)).toBeVisible();
  await expect(page.getByText(/Fine-tuning/i)).toBeVisible();
  await expect(page.getByText(/RAG/i)).toBeVisible();
  await expect(page.getByText(/Explainability/i)).toBeVisible();
  await expect(page.getByText(/Human-AI Collaboration/i)).toBeVisible();
});

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');

  // Click on Multi-modal link
  await page.getByText(/Multi-modal/i).click();
  await expect(page).toHaveURL(/.*multimodal/);
  await expect(page.getByText(/Multi-modal Demos/i)).toBeVisible();
});

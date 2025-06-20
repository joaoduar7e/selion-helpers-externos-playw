import { test, expect } from '@playwright/test';

// Helper functions for common actions
const clickHelper = async (page, selector) => {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.waitFor({ state: 'visible' });
  await element.click();
};

const fillHelper = async (page, selector, text) => {
  const element = typeof selector === 'string' ? page.locator(selector) : selector;
  await element.waitFor({ state: 'visible' });
  await element.fill(text);
  await expect(element).toHaveValue(text);
};

test('Cenário de teste', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  
  await page.goto('https://selion.com.br/todo-selion', {
    waitUntil: 'networkidle'
  });
  await expect(page).toHaveURL('https://selion.com.br/todo-selion');
  await fillHelper(page, page.locator('#todo-input'), 'Todo Helper Externo');
  await clickHelper(page, page.locator('#add-todo-button'));
  await clickHelper(page, page.locator('#todo-checkbox-1750384948389'));
});
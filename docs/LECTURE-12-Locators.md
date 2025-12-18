# Playwright — Lecture 12: Locators & Typing into Elements

## 1. Timeouts Recap
- **Global test timeout:** Default 30s — applies to locators and actions (click, fill, navigation). If any step hangs beyond this, the test fails.
- **Assertion timeout:** Default 5s — applies only to assertions (e.g., `await expect(page).toHaveTitle('...')`). Assertions auto-retry until the timeout elapses.
- **Why it matters:** UIs can be slow; assertion auto-waiting reduces flakiness.

---

## 2. Why Locators Are Required
- Playwright cannot guess where elements are. You must tell it which element and how to find it using locators.
- Pattern: identify element with `page.locator(selector)` then perform an action on the locator.

Example:
```js
const userInput = page.locator('#username');
await userInput.fill('Rahul Shetty');
```

---

## 3. Locator Basics
- API: `page.locator(selector)` — creates a Locator that tracks element(s).
- Important: `locator()` only finds/tracks; it does not perform actions. Actions are methods on the locator (e.g., `.fill()`, `.click()`).
- Always `await` actions: `await page.locator(...).click()`.

---

## 4. Supported Selectors
- **CSS:** Fully supported and recommended (Playwright is CSS-first).
- **XPath:** Supported but not recommended (use only when absolutely necessary).

---

## 5. Inspecting Elements
- Right-click → Inspect in browser.
- Look for attributes: `id`, `class`, `name`, `type`, `data-*` attributes.
- Use attributes to build clear, stable CSS selectors.

---

## 6. CSS Selector Rules (Priority & Examples)
1. **ID selector (best):** `#username`
   - Example: `await page.locator('#username').fill('Rahul Shetty');`
   - Fast, unique, reliable.
2. **Attribute selector (very powerful):** `[name="username"]`, `[type="password"]`
   - Example: `await page.locator('[name="username"]').fill('Rahul');`
   - Works when ID/class unavailable.
3. **Class selector:** `.form-control`
   - Use only if unique.
4. **Tag + ID/Class (optional):** `input#username` or `button.sign-in` to narrow matches.

Tip: Validate selectors with browser tools or extensions — ensure exactly one match.

---

## 7. Selector Validation Tools
- Chrome extensions: SelectorsHub, ChroPath.
- Paste your selector into the tool and confirm a single match.
- Do not blindly copy; adjust for uniqueness and maintainability.

---

## 8. Typing into Inputs (IMPORTANT)
- Deprecated: `type()` — avoid.
- Recommended: `fill()` — clears existing text then types new value.

Examples:
```js
await page.locator('#username').fill('Rahul Shetty');
await page.locator('[type="password"]').fill('learning');
```
- Use `press()` or keyboard APIs for special keys (e.g., `await page.locator('input').press('Enter')`).

---

## 9. Clicking Buttons
- Pattern: Locate -> Action.

Example:
```js
await page.locator('#signInBtn').click();
```

---

## 10. Complete Login (invalid credentials)
```js
test('Invalid login test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  await page.locator('#username').fill('Rahul Shetty');
  await page.locator('[type="password"]').fill('learning');
  await page.locator('#signInBtn').click();

  // Example assertion (adjust to actual app behavior):
  await expect(page.locator('.error')).toHaveText(/incorrect|invalid/i);
});
```

---

## 11. Key Patterns
- `page.locator()` → identify element
- `.fill()` → set input value (preferred)
- `.click()` → click actions
- Always `await` actions and assertions
- Prefer selector strength: `id` > `attribute` > `class`
- Prefer CSS selectors over XPath

---

## 12. Common Beginner Mistakes
- Missing `await` on async actions
- Using deprecated `type()` instead of `fill()`
- Non-unique selectors causing multiple matches
- Blindly copying plugin-generated selectors

---

## 13. Interview-Ready Summary
- Locators are mandatory; CSS selectors are preferred.
- Use `fill()` instead of `type()`.
- Assertions auto-wait and retry up to assertion timeout.
- Default timeouts: global `30s`, assertion `5s` — adjust only when needed.
- Always `await` actions.

---

## Quick Cheat Sheet
- Locate: `const el = page.locator('#id')`
- Fill: `await page.locator('input[name="user"]').fill('alice')`
- Click: `await page.locator('button#submit').click()`
- Expect title: `await expect(page).toHaveTitle('Home')`
- Rare explicit wait: `await page.waitForSelector('#el', { state: 'visible' })`

---

Would you like me to:
- Add a working example test to `tests/05_Basic.spec.js` that demonstrates these patterns?
- Or commit the new file to git for you? (I can prepare the commit command.)

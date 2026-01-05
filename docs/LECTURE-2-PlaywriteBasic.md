
Explanation
-----------

1) Important Playwright files

- Test files (`*.spec.js`): contain automation test cases written using Playwright APIs.
- Configuration (`playwright.config.js`): test runner settings such as browsers, timeouts, retries, `testDir`, and reporters.

2) Test file location & naming

- All Playwright tests live in the `tests/` folder.
- Use the `.spec.js` suffix by convention to identify test specification files.

3) `test()` structure

- `test()` takes two arguments:
  1. Test name (string)
  2. Test function (usually `async` and containing automation steps)
- Each `test()` block is an independent test case.

4) `async` / `await` (required)

- Playwright actions return promises. Always `await` actions and mark the test function `async`.

- Incorrect (no `await` — leads to race conditions and flaky tests):
  page.goto(url);
  page.fill('#username', 'admin');
  page.click('#login');

- Correct (use `await`):
  await page.goto(url);
  await page.fill('#username', 'admin');
  await page.click('#login');

- Rule: If you use `await` inside a function, declare the function with `async`.

5) Functions: traditional vs arrow

-- Traditional:
  test('Example', async function () { ... });
-- Preferred (arrow):
  test('Example', async () => { ... });

6) Relationship between `async` & `await`

- `async`: declares the function can use `await` and makes it return a promise.
- `await`: pauses execution until the awaited promise resolves.

- If you use `await` inside a function, the function must be declared `async`.
- Using `await` in a non-`async` function is a syntax error; missing `await` causes race conditions.

7) Anonymous functions & arrow functions

- Traditional:
  test('Example', async function () { ... });
- Arrow (preferred):
  test('Example', async () => { ... });

- Benefits: cleaner syntax, less boilerplate, standard modern JS practice.

8) Key takeaways

- Use `.spec.js` for test files.
- Import `test` from `@playwright/test`.
- Always use `async` + `await` for Playwright steps.
- Prefer arrow functions for clearer, shorter tests.
- Keep each `test()` isolated to ensure independent execution.

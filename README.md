# AVA test runner
Visual Studio Code extension for running AVA (https://github.com/avajs/ava) tests.

## Features
- Running all tests in the active editor
- Running single test using shortcut (test is automatically found using the cursor position)
- Running a single test using CodeLenses
- Debugging single test using CodeLenses

## Configuration
- `ava.directoryReplaceFrom`
- `ava.directoryReplaceTo`
- `ava.extensionReplaceFrom`
- `ava.extensionReplaceTo`

You may wonder why do we even need these properties. By default, they can be empty. It was added mainly to handle the case when tests are written using `TypeScript` without `ts-node`. The solution is to create a pretest task that compiles tests before running them. In such a case, those tests can be run using eg.

```
{
    "ava.directoryReplaceFrom": "/tests",
    "ava.directoryReplaceTo": "/dist-tests",
    "ava.extensionReplaceFrom": ".ts",
    "ava.extensionReplaceTo": ".js"
}
```
Let's say that the path of the original test file is as follows: `/sth/tests/RandomTests.ts`. This file is compiled to `/sth/dist-tests/RandomTests.js`. Using those settings replaces the original path during tests run.

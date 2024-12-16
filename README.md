# Expo CLI: Unable to Resolve Module

This repository demonstrates a common error in Expo CLI projects: "Unable to resolve module". This error occurs when the JavaScript runtime cannot find a required module.  This often happens due to typos in import statements, missing dependencies, or incorrect package configurations.

The `bug.js` file shows an example of incorrect module import, leading to the error.  The `bugSolution.js` file provides the corrected version.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `expo start`.
4. Observe the error message in the terminal.
5. Refer to `bugSolution.js` for the fix.

## Solution

Carefully check your import statements for typos and ensure all necessary dependencies are correctly installed and configured in your `package.json` file.  You may need to run `expo install <missing-package>` if a module is missing.
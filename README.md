## How to reproduce

1. Clone this repository.
2. Open it in VS Code.
3. Select "Run Extension" in the debug panel and start debugging.
4. In the new VS Code window that opens, run `F1 > Hello World` command.

## Expected behavior
The extension activates without hanging. Information message "Hello World from your extension!" is shown.

## Actual behavior
The extension activation hangs indefinitely. Information message is never shown.

## Environment
- VS Code version: 1.107.0
- OS version: macOS 26.1

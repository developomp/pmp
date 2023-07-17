# Contribution Guide

## Setting up

> **If you are on Windows:**
>
> - Do **NOT** use cmd
> - Do **NOT** use Windows PowerShell (not [this PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/whats-new/differences-from-windows-powershell?view=powershell-7.3))
> - **DO** run commands from PowerShell or a Linux terminal such as WSL or Git Bash (latter is recommended if you don't have anything installed already)

1. Install tauri dependencies (rust toolchain, libraries, android SDK, etc)

   - https://next--tauri.netlify.app/next/guides/getting-started/prerequisites/

2. Install NodeJS v18+ and pnpm
3. Clone this repository
4. Install node dependencies

   ```
   pnpm install
   ```

## Developing Frontend

```
pnpm dev
```

## Developing Desktop App

```
pnpm tauri dev
```

## Developing Android App

1. Start a virtual device in Android Studio
2. Run the following command:

   ```
   pnpm tauri android dev
   ```

## Updating Icons

1. Update [app-icon.png](./app-icon.png)
2. Delete `src-tauri/gen`
3. Run the following command

   ```
   pnpm tauri icon
   ```

## Learning Material

- [tauri v2-alpha documentation](https://next--tauri.netlify.app)
- [SolidJS tutorial](https://solidjs.com/tutorial)

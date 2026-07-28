# azdias-ui
Common `azdias` UI components for web development based on `shadcn/ui`.

---

## Installing
Inside your monorepo's root:

```sh
git submodule add https://github.com/lucas-azdias/azdias-ui.git packages/ui
```

### Adding `components.json`
Add to your project the following `components.json` file:

```json
{
    "$schema": "https://ui.shadcn.com/schema.json",
    "style": "base-nova",
    "rsc": false,
    "tsx": true,
    "tailwind": {
        "config": "",
        "css": "../../packages/ui/src/styles/styles.tailwind.css",
        "baseColor": "neutral",
        "cssVariables": true
    },
    "iconLibrary": "lucide",
    "aliases": {
        "components": "@/components",
        "hooks": "@/hooks",
        "lib": "@/lib",
        "utils": "@azdias/ui/lib/utils",
        "ui": "@azdias/ui/components"
    },
    "rtl": false,
    "menuColor": "default",
    "menuAccent": "bold"
}
```

### Adding package to your `package.json`

```json
{
    ...,
    "dependencies": {
        "@azdias/ui": "workspace:*",
        ...
    },
    ...
}
```

### Adding package to your `tsconfig.json`

```json
{
    ...,
    "compilerOptions": {
        ...,
        "paths": {
            ...,
            "@azdias/ui/*": ["../../packages/ui/src/*"],
        },
    },
    ...
}
```

> [!NOTE]
> If you're using `@azdias/config`, place this configuration in your project's `tsconfig.app.json`.

---

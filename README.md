# readme.nit.ai

An approval-gated draft for a future public working README for Nitai Perez. The current page tests the design and information structure with three source-backed phrases; it does not yet describe Nitai’s values, practices, scope, or promises.

## Status

The first page is an approval-gated draft tracked in [issue #1](https://github.com/selfish/readme.nitai/issues/1). Copy, visible design, domain configuration, and publication are not approved merely because checks pass.

## Development

Requires Node.js 24 or newer.

```sh
npm ci
npm run build
npx playwright install --with-deps chromium
npm test
```

Run the local development server with `npm run dev`.

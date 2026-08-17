# readme.nit.ai

An approval-gated draft for a future public working README for Nitai Perez. The current page preserves the approved visual direction from PR #3 while testing edited copy distilled from two owner-supplied working documents. Those documents are source material, not page copy; the draft intentionally selects, compresses, and reorganizes their themes.

## Status

The first page is an approval-gated draft tracked in [issue #1](https://github.com/selfish/readme.nitai/issues/1). It now includes first-person work beliefs and a small amount of personal context for local review. Copy, visible design, personal disclosure, domain configuration, and publication all require explicit owner approval; passing checks and the `noindex` directive are not publication or privacy controls. Do not deploy or push this revision to a public preview solely for review.

## Development

Requires Node.js 24 or newer.

```sh
npm ci
npm run build
npx playwright install --with-deps chromium
npm test
```

Run the local development server with `npm run dev`.

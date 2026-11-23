# Speak I Hear Cloudflare recovery copy

This directory contains the Cloudflare production Worker and its required R2 objects from the November 22, 2026 recovery capture. Cloudflare is the production host. This recovery copy is stored separately from the GitHub Pages site so it does not replace or deploy over that site.

## Contents

- `worker.js` — source captured for Cloudflare version `1a70b258` on November 22.
- `wrangler.toml` — Worker name, compatibility date, and `FILES` R2 binding to bucket `media`.
- `r2-assets/_site/` — files to restore into the `media` bucket using the `_site/` object-key prefix.
- `R2-MANIFEST.md` — source and object-key list for the required R2 objects.
- `CURRENT-PRODUCTION-CHECKPOINT.md` — November 23 checkpoint for live version `9932b656`, including the source-version boundary.
- `current-content/day-to-day-night-to-night.md` — current article source.

## Version boundary

The live Worker showed version `9932b656` on November 23, 2026. The included Worker source is version `1a70b258` from November 22 and has not been verified as an exact copy of today's active Worker. Do not deploy this source over production without reconciling the difference first.

The GitHub recovery branch is `cloudflare-recovery-2026-11-22`, separate from `main`, which continues to serve the existing GitHub Pages site. This package does not deploy from GitHub.

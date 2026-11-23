# Speak I Hear Cloudflare recovery copy

This folder is a recovery copy of the Cloudflare production Worker and its required R2 objects. Cloudflare is the production host. This folder is stored separately from the GitHub Pages site so it does not replace or deploy over that site.

## Contents

- `worker.js` — production Worker source copied from Cloudflare and updated for the live sunrise intro.
- The copied script is the source for active Cloudflare version `1a70b258`.
- `wrangler.toml` — Worker name, compatibility date, and `FILES` R2 binding to bucket `media`.
- `r2-assets/_site/` — files to restore into the `media` bucket using the same `_site/` object-key prefix.
- `R2-MANIFEST.md` — source and object-key list for the seven required R2 objects.

## Recovery notes

1. Restore the objects from `r2-assets/_site/` into the R2 bucket so their keys remain `_site/<filename>`.
2. Create or select a Worker and bind R2 bucket `media` as `FILES`.
3. Deploy only after reviewing the target Worker name. The included config names the production Worker `speakihear`; for a drill, use a separate Worker name and a separate test bucket.
4. Reattach the `speakihear.org` custom domain only during an approved production recovery. This copy does not include DNS or domain-routing settings.

The GitHub recovery branch is separate from `main`, which continues to serve the existing GitHub Pages backup site. This package does not deploy from GitHub.

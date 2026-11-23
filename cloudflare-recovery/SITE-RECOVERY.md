# Speak I Hear: Hosting and Recovery Process

_Last updated: November 22, 2026_

## Roles of each copy

- **Cloudflare** hosts the live `speakihear.org` site. The production Worker is named `speakihear` and is the current running version.
- **GitHub** is the source repository and a recovery backup: `SambolusThomas/SambolusThomas.github.io`. It must not be treated as the live editing target or connected to automatic deployment unless that workflow is deliberately reviewed and approved.
- **iCloud** is an additional independent backup of the site files and recovery materials.

The recovery goal is to be able to restore the site and bring it back online within a few hours if Cloudflare becomes unavailable or compromised.

## Safe change and backup process

1. Read or export the current production Worker from Cloudflare without deploying changes.
2. Keep a verified local copy of the Worker and related public site assets.
3. Review edits and preview them locally in Safari before changing the live site.
4. Keep GitHub synchronized as a backup of the approved source; do not overwrite the existing GitHub Pages site while treating it as the live production source.
5. Keep an independent iCloud copy, and verify that both backups contain the files needed for recovery.
6. Make a production change in Cloudflare only after the preview is approved. Confirm the live site afterward.

## Current checkpoint

- The production `worker.js` was copied from Cloudflare Quick Edit into this workspace as plain text.
- A standalone transition preview was made from the cosmic sunrise card and the current welcome splash. Samuel opened it in Safari and confirmed that the standalone preview works.
- The cosmic sunrise intro is now live on the Cloudflare production Worker `speakihear`, active version `1a70b258`.
- The intro image and entry script are served from the Cloudflare R2 bucket `media` under `_site/`. The image key was corrected to match the uploaded filename, and the public image URL and live homepage were verified.
- The intro plays once per browser session, then fades into the existing welcome splash. Visitors who prefer reduced motion skip the animation.
- GitHub `main` remains unchanged and continues to hold the existing GitHub Pages site. A separate `cloudflare-recovery-2026-11-22` branch now holds the current Worker, `wrangler.toml`, all seven R2 objects, and recovery instructions.
- iCloud was not changed. Samuel will copy the prepared recovery folder there.
- The local recovery folder and ZIP are `cloudflare-recovery/` and `speakihear-cloudflare-recovery.zip` in this workspace. Their SHA-256 checksums and ZIP integrity were verified.

## Recovery drill — November 22, 2026

- Read-only inspection confirmed that GitHub `main` contains the existing static site but no Cloudflare Worker source or Wrangler config.
- The recovery package was committed to the separate branch `cloudflare-recovery-2026-11-22`. Its tree contains the Worker, configuration, seven R2 objects, recovery notes, and checksums. GitHub `main` was verified unchanged.
- The R2 asset copies were checked against their existing GitHub blob IDs where applicable. The ZIP integrity check passed, and every listed local checksum passed.
- The live image URL and welcome page had been verified after deployment. A separate local syntax check could not be run because Node.js is not installed in this environment; Cloudflare accepted and is running the deployed Worker.
- Samuel will copy the local recovery folder to iCloud. The iCloud copy has not yet been verified, and a full restore in an isolated test Worker is still pending.
- Result: the source and assets are now assembled in both a local package and a GitHub recovery branch. The restore workflow is not fully proven until an isolated test Worker is restored and checked.

## Important lesson

Earlier work began editing the website in GitHub before the production and backup roles were clear. Samuel stopped that work. Preserve the distinction above: Cloudflare runs the live site; GitHub and iCloud are recovery copies. Preview first, keep backups current, and do not make an unreviewed change to either the live site or public repository.

## Production checkpoint — November 23, 2026

Cloudflare Quick Edit showed active latest version `9932b656`. The public site was serving `/preparing-for-battle`; the newly published `Day to Day, Night to Night` article and its Our Shared Journey listing were also present. Its approved manuscript is included in `current-content/`.

The Worker source in this recovery directory remains the November 22 capture for version `1a70b258`. It is not verified as an exact source copy of version `9932b656`. The R2 objects and configuration also remain from the November 22 capture. Do not treat this package as a byte-for-byte export of the current production deployment or deploy the older Worker without reviewing the difference.

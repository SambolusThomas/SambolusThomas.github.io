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
- GitHub and iCloud were not changed during this deployment. They still need to be synchronized and checked as backups before the recovery copies are considered current.
- The GitHub repository was last inspected read-only. Its public snapshot is dated November 14, 2026, and the repository did not contain the current `worker.js` at that time. GitHub is therefore not yet verified as a current backup of Cloudflare production.
- The current `worker.js` and the transition preview are local working copies; the updated Worker and its R2 assets still need to be safely reviewed and added to the intended backup locations.

## Recovery drill — November 22, 2026

- Read-only inspection of the GitHub default branch confirmed that it contains the older static-site files but no `worker.js` or `wrangler.toml`. It cannot currently recreate the Cloudflare Worker deployment by itself.
- The local workspace has `worker.js`, `speakihear-entry.js`, and the cosmic sunrise image. The Worker references the `FILES` R2 binding and the expected R2 asset keys, but there is no Wrangler configuration in the workspace.
- The public image and live welcome page had been verified after deployment. A local syntax check could not be run because Node.js is not installed in this environment.
- iCloud was not inspected. No Cloudflare or GitHub changes were made during this drill.
- Result: the procedure correctly identified a backup gap, but a full restore has not yet been demonstrated. To make the backup complete, save the Worker, its binding/compatibility configuration, required R2 assets, and recovery instructions together in GitHub and iCloud; then restore into an isolated test Worker before calling the drill complete.

## Important lesson

Earlier work began editing the website in GitHub before the production and backup roles were clear. Samuel stopped that work. Preserve the distinction above: Cloudflare runs the live site; GitHub and iCloud are recovery copies. Preview first, keep backups current, and do not make an unreviewed change to either the live site or public repository.

# Speak I Hear production checkpoint — November 23, 2026

The live Cloudflare Worker is `speakihear` on `speakihear.org`. Cloudflare Quick Edit showed active latest version `9932b656` during this checkpoint. The public site was visibly serving the article **Preparing For Battle** at `/preparing-for-battle`; the **Day to Day, Night to Night** article and its Our Shared Journey listing were also present in today's publication work. The approved article manuscript is included in `current-content/`.

## Version boundary

The recovery Worker included here is the previously captured source for active version `1a70b258` (November 22, 2026). It is a complete earlier recovery baseline, but it has **not** been confirmed as byte-for-byte source for today's active version `9932b656`. Cloudflare Quick Edit does not expose the source as a downloadable local file in the available controls, so this package does not claim an exact export of today's Worker. Do not deploy the older `worker.js` over production without reviewing and reconciling the version difference first.

The R2 asset copies, Wrangler configuration, previous recovery notes, and checksums remain from the November 22 package. They have not been re-exported from Cloudflare during this checkpoint.

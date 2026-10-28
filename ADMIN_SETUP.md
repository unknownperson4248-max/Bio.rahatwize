# RAHAT WIZE Admin Setup

Status: KV namespace created and initial portfolio config saved. R2 not enabled in Cloudflare account. The live Worker is NOT switched to this backend yet.

## Enable storage
1. In Cloudflare Dashboard → R2 Object Storage, activate R2 (billing setup may be requested).
2. Create bucket `rahat-wize-media`.
3. Uncomment `[[r2_buckets]]` in wrangler.toml.

## Configure login securely
In Cloudflare Dashboard → Workers & Pages → bio-rahatwize → Settings → Variables and Secrets, add encrypted secrets:
- `ADMIN_USERNAME`: desired admin username
- `ADMIN_PASSWORD`: long, unique password (16+ characters recommended)
- `SESSION_SECRET`: independently generated random 32+ byte string

Never put any secret in GitHub or chat. After secrets and R2 binding are ready, deploy with `npx wrangler deploy` from this repo or connect GitHub builds to the Worker. The Worker serves `/admin.html` and API endpoints `/api/admin/login`, `/api/admin/config`, `/api/admin/upload`, `/api/admin/logout`. The public website loads `/api/config` from KV.

**Important**: Deployment must preserve existing static images under assets/. Verify the page and the admin login before considering setup complete. The previous live Worker remains in place until the new deployment is explicitly made.

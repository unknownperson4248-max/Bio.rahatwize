# RAHAT WIZE Portfolio

Two-column neon gaming portfolio. Left: editable profile/photo/bio with animated pink/cyan circle; right: editable social links. No background/profile photo is preinstalled.

## Cloudflare
This repository contains a **static frontend**. Connect Cloudflare Workers & Pages > Create > import Git repository > `Bio.rahatwize`, choose **Workers Static Assets**, static assets directory `./` (or Pages with output directory `.`). Deploy to a *new* worker first and confirm the URL before switching custom domains. Existing `bio-data` remains unchanged.

## Admin
The admin interface requires a **separately configured authenticated backend** that provides `GET /api/config`, `GET /api/admin/config`, `POST /api/login`, `POST /api/admin/save` and image upload. Static hosting alone does not provide private editing. Never enter a real password into an unconfigured static admin page. Do not put secrets into GitHub. A secure backend and storage must be added and tested separately.

Current website shows defaults until a backend is configured. The photo, background and logo values are URLs served from secure object storage or another HTTPS origin.

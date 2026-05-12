# Toto Nest CMS — Setup

Decap CMS is wired up at `/admin`. All site content lives in `src/content/`
as JSON files. The CMS edits those files directly via Git, and the site
rebuilds automatically.

## Editable content

- **Homepage**: hero, stats, why-choose-us cards, CTA banner
- **Programs**: add/edit/delete program cards
- **Testimonials**: parent quotes (toggle active to show/hide)
- **Gallery**: photos with category tags
- **Team Members**: staff profiles
- **FAQs**: admissions Q&A
- **Site Settings**: school name, phone, email, address, WhatsApp, socials

## One-time setup before admins can log in

1. **Push your repo to GitHub** (use the GitHub integration in Lovable).
2. **Edit `public/admin/config.yml`** — change `repo: YOUR_GH_USER/YOUR_REPO`
   to your actual GitHub repo and set the correct `branch` (usually `main`).
3. **Set up a GitHub OAuth proxy** so the CMS can authenticate editors.
   This site is hosted on Cloudflare Workers (not Netlify), so Netlify
   Identity is not available. Two easy options:
   - Deploy [decap-proxy](https://github.com/i40west/netlify-cms-cloudflare-pages)
     to Cloudflare Workers (free), or
   - Deploy [netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider)
     to Vercel/Render (free).
   Then create a GitHub OAuth App, add the client id + secret to your proxy,
   and uncomment `base_url` + `auth_endpoint` in `public/admin/config.yml`
   pointing at your proxy URL.
4. Visit `https://your-site/admin` and click **Login with GitHub**.

## Local editing (no proxy needed)

While developing, set `local_backend: true` in `config.yml`, then run:

```bash
npx decap-server
```

…and open `/admin`. Saves go straight to the local files.

## Adding images

CMS uploads land in `public/images/uploads/` and are referenced as
`/images/uploads/foo.jpg`. The existing brand images in `src/assets/`
are referenced as `/src/assets/foo.jpg`. The image resolver in
`src/lib/content.ts` handles both transparently.
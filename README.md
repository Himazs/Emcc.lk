# EMCC Official Website — redesign package

A responsive multi-page static website for Ethungahakotuwa Muslim Central College, retaining the existing AURA 2027 countdown, EMMY mascot experience, EMMY FAQ/AI assistant, and Vercel serverless chat endpoint.

## Local preview

Run from this directory:

```bash
python -m http.server 8000
```

Then open http://localhost:8000. The chat FAQ works locally; the AI response endpoint requires deployment to a compatible serverless host and an API key.

## Deploy to the existing Firebase Hosting project

The package includes `firebase.json` for static Hosting. From this directory, select the existing Firebase project with `firebase use <project-id>` (or initialize/select it interactively), then run `firebase deploy --only hosting`. The built-in EMMY school FAQ works on static Hosting. The AI endpoint in `api/chat.js` is a Vercel serverless function and will not execute as a static Firebase Hosting file; deploy the project to Vercel or connect an equivalent Firebase Cloud Function and route `/api/chat` to it if AI-generated responses are required.

## Deploy to Vercel

1. Import this project directory/repository into Vercel.
2. Select **Other** as the framework preset (static site + serverless function).
3. Add `OPENAI_API_KEY` in Project Settings → Environment Variables to enable AI-powered EMMY responses.
4. Optionally set `OPENAI_MODEL` to a model available to your API account.
5. Redeploy after configuring environment variables.

Without `OPENAI_API_KEY`, EMMY continues to answer the built-in verified school FAQ questions. The API key is only used server-side in `/api/chat.js`.

## Included features

- Responsive desktop, tablet and mobile layouts with accessible mobile navigation.
- Original EMCC crest rendered in white for the header/hero and the supplied gold crest in the footer.
- School history, vision, mission, academic pathways, school-life themes and editable achievement/news areas.
- Dedicated AURA 2027 anniversary section, event countdown to 14 January 2027 at 00:00 Sri Lanka time, supplied EMMY mascot and scroll-follow flying EMMY effect.
- Curated school archive gallery with lazy-loaded WebP images and an accessible image lightbox.
- EMMY assistant with verified local FAQ fallback and optional AI API endpoint.
- School profile, student rules, AURA information and privacy policy PDF downloads.
- SEO metadata, semantic sections, keyboard focus styles, reduced-motion support and image optimisation.

## Content verification before public launch

- The school profile states 1 December 1949 as the establishment date. The supplied 75th anniversary artwork says 1949–2024, while AURA is promoted as a 75th anniversary celebration in January 2027. Confirm the official anniversary wording and milestone year with the school administration before publication.
- Confirm the AURA event programme, venue details, event hours, registration information and sponsor details.
- The supplied profile lists 700+ students and 30+ qualified teachers. Confirm the current figures before treating them as live statistics.
- A 100% A/L pass-rate claim appeared in the supplied profile, but its reporting year and basis were not specified; it has intentionally not been published.
- No specific student awards, examination results or competition wins were supplied. Achievement areas are clearly presented as awaiting verified updates.
- Replace the temporary archive captions with approved dates, event names and descriptions; verify student-photo permissions.
- Add official social media links and approved news/events as they become available.
- Review the privacy policy and downloadable school documents with the school administration before launch.

## Asset notes

Original supplied images remain in `assets/` alongside optimised WebP variants. The archive gallery includes the photographs from the supplied school gallery ZIP. Downloadable PDFs are in `assets/documents/`.


## Multi-page upgrade

The website now includes dedicated pages: `our-school.html`, `academics.html`, `school-life.html`, `achievements.html`, `news-events.html`, `gallery.html`, and `aura-2027.html`. The homepage remains `index.html`. Shared page navigation, responsive styles and page interactions are in `pages.js` and `pages.css`. The EMMY assistant is available across the dedicated pages through `chat-widget.js`. All pages reuse the supplied EMCC assets and school documents.

Firebase Hosting serves these static `.html` routes directly; no rewrite rule is required. Upload the full project directory, including the `assets/` folder and the new page files.

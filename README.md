# Project Atlas — RCM Knowledge Bank

A free, multi-page interactive site for your RCM learning content, organized
into a 7-day weekly series. Built from Project Atlas Vision & Mission v1.1.

## What's in the box
```
index.html                          Home — vision, mission, week navigator
monday-regulations.html             MON — Healthcare Regulations
tuesday-smile-on-every-claim.html   TUE — There's a Smile on Every Claim
wednesday-carc-codes.html           WED — ANSI CARC Codes
thursday-ar-scenarios.html          THU — AR Scenarios
friday-healthcare-foundation.html   FRI — Healthcare Foundation
saturday-dental-rcm.html            SAT — Dental RCM
sunday-case-study.html              SUN — Case Study
assets/styles.css                   Shared design system (all pages)
assets/app.js                       Shared search + post-detail logic
```
Each series page ships with 3 sample lessons so you can see the format —
replace them with your real LinkedIn posts.

## Go live for free (GitHub Pages, ~10 minutes)
1. Create a free GitHub account at github.com if you don't have one.
2. Create a new **public** repository, e.g. `project-atlas`.
3. Upload every file **keeping the folder structure** — `index.html` and all
   the `.html` pages at the root, and the `assets` folder with `styles.css`
   and `app.js` inside it. ("Add file → Upload files" supports drag-and-drop
   of a whole folder in most browsers.)
4. Go to **Settings → Pages**. Set Source to **Deploy from a branch**,
   branch `main`, folder `/root`. Save.
5. Wait ~1 minute. Your site is live at
   `https://YOUR-USERNAME.github.io/project-atlas/`.

**Important:** the folder structure must stay intact — every page links to
`assets/styles.css` and `assets/app.js` with that exact relative path.

**Optional custom domain later:** GitHub Pages supports a custom domain for
free — you'd only pay for the domain name itself (~$10-12/year), whenever
you're ready.

## Adding your LinkedIn posts to a series
Open the relevant day's `.html` file and find `const POSTS = [ ... ];` near
the bottom. Copy an existing post object and paste your content in:

```js
{
  id: "MON-004", date: "2026-08-03", readTime: "3 min",
  title: "Your post title here",
  excerpt: "One or two sentence teaser shown on the card.",
  body: [
    "First paragraph of your LinkedIn post.",
    "Second paragraph. Wrap key terms in <strong>...</strong> to highlight them."
  ]
}
```
Save, re-upload (or edit directly in GitHub's web editor), and the page
updates automatically — search and the detail view work with no other changes.

## Editing the home page
The Executive Vision, Mission, North Star, and "What Atlas Is Not" sections
on `index.html` are pulled directly from your Vision & Mission v1.1 document.
Edit the text inside the `.mission-card` sections directly in the HTML.

## Design system
Every page shares `assets/styles.css`. Each series page sets its own accent
color with one line (`--accent`) near the top of the page — that's the only
thing that changes the color scheme per day. Global colors (background, mint,
gold) live once in `:root` at the top of `styles.css`.

## Monetization roadmap (in order of effort)
1. **Email list first** — connect the subscribe form (currently a placeholder
   alert) to a free-tier tool like Buttondown, MailerLite, or Mailchimp.
2. **Display ads** once you have steady traffic — Google AdSense or Ezoic.
3. **Digital products** — turn a series into a paid PDF (e.g. a full CARC/RARC
   cheat sheet from the Wednesday series) and sell it via Gumroad.
4. **Sponsored posts / affiliate links** from RCM software vendors once you
   have an engaged niche audience.
5. **Paid mini-course** — the 7-day structure already doubles as a course
   outline once each series has 15-20 posts.

This matches Phase 1–2 of the Project Atlas roadmap (Knowledge Foundation →
Learning Platform). Learner accounts, progress tracking, assessments, and the
AR/denial calculators described in the vision doc are natural next phases
once this content foundation is live.

# Revenue Cycle Knowledge Bank — Soft Launch Package

**Brand promise:** Deposit Time. Withdraw Knowledge.

This is the public soft-launch experience for the Revenue Cycle Knowledge Bank. It is designed as a knowledge experience centre: a clear view of the vision, a working sample learning mission, pathways for individual learners / teams / healthcare practices, and a transparent master plan that distinguishes available features from development work and future plans.

## Pages

- `index.html` — experience-centre homepage, sample mission, audience pathways, and status-labelled master plan.
- `first-mission.html` — complete fictional learning mission with two decisions and explanatory feedback.
- `contact.html` — pilot interest and feedback form with optional email-update consent.
- `monday-regulations.html`, `tuesday-smile-on-every-claim.html`, `wednesday-carc-codes.html`, `thursday-ar-scenarios.html`, `friday-healthcare-foundation.html`, `saturday-dental-rcm.html`, `sunday-case-study.html`, `general-rcm-posts.html` — retained educational archive pages. They are not promoted from the homepage while their content is being reviewed and updated.
- `assets/styles.css`, `assets/app.js`, `images/` — shared design system, archive interactions, and image assets.

## Deployment

This is a static site and can be deployed to GitHub Pages. Keep the directory structure intact. Upload the files and folders at the repository root, then enable **Settings → Pages → Deploy from a branch → `main` → `/(root)`** (or use the repository's existing Pages configuration).

## Before announcing the soft launch

1. Deploy to the intended GitHub Pages repository and test the actual published URL on desktop and mobile.
2. Test every homepage CTA, the two mission pages, and the master-plan detail controls.
3. Submit one controlled test through `contact.html` and confirm that the configured form service receives it. The form currently points to a Formspree endpoint already present in the source; verify that the endpoint is active and routed to the correct inbox before announcing the form publicly.
4. Confirm the optional updates checkbox is recorded correctly by the form service. Do not send updates to people who did not opt in.
5. Check that all local links and image references work after deployment.
6. Review the archived LinkedIn content before adding series pages to homepage navigation or promoting the weekday series as a complete programme.
7. Never ask visitors to submit real patient bills, identifiers, claim documents, or protected health information. The mission is fictional and is not connected to a payer.

## Product truth and access

- Available now means present in this static website and testable.
- In development means the experience is being built and is not represented as a finished public feature.
- Planned means future intent, not a delivery date or promise.
- Self-learning knowledge resources are intended to remain free. Optional guided learning or facilitated services may have separate fees.
- This soft-launch website does not provide learner accounts, progress tracking, live payer connections, or a production team/practice portal.

## Content governance

The broader Knowledge Bank uses a foundation-first teaching model: **Foundation → Understanding → Application**. Prefer authoritative primary sources for regulatory and operational claims. A catalogue entry does not automatically mean a lesson is published; content should be source-checked, reviewed, and status-labelled before public promotion.

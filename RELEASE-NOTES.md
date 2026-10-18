# Soft Launch Release Notes — Experience Centre v3

## Included
- Reframed the homepage as a premium Knowledge Bank experience centre, using the apartment-showroom/master-model metaphor.
- Added three clear audience pathways: individual learners, teams/educators, and healthcare practices.
- Preserved the working sample mission and made the master-plan showcase interactive.
- Added explicit status labels for available now, in development, and planned features.
- Added trust principles for authoritative sources, learning-oriented feedback, synthetic practice data, and the free self-learning commitment.
- Reworked the contact page into a pilot-interest and feedback form, with optional email-update consent and a prominent no-patient-data notice.
- Standardized public site chrome to the Revenue Cycle Knowledge Bank brand; archived content pages are retained but are not linked from the homepage.
- Replaced nonfunctional archive newsletter placeholders with a real link to the pilot-interest form.
- Fixed a broken learning-journey anchor and removed requests for optional banner images that are not present in the package.
- Added a soft-launch QA checklist and deployment notes.

## Checks completed locally
- All 11 HTML pages parsed.
- Local file links and in-page anchors checked: pass.
- Duplicate HTML IDs checked: pass.
- Inline JavaScript syntax checked with Node.js: pass.
- Homepage has no direct links to the weekday-series archive pages.

## Still required before public announcement
- Deploy to the intended GitHub Pages repository and test the published URL on desktop and mobile.
- Submit a controlled test through the existing Formspree endpoint and verify the message arrives in the intended inbox.
- Verify optional email-update consent is recorded correctly and that no updates are sent without consent.
- Manually test the homepage mission, full mission, pathway preselection, master-plan cards, and form success/error states in a browser.

Local static checks do not prove that the remote form endpoint is active or that GitHub Pages has deployed the package correctly.

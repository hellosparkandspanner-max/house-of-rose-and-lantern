# House of Rose & Lantern — GitHub Pages pre-launch website

A responsive single-page design using the supplied existing brand artwork, and preserving **The Invitation** and **Join the First Chapter** language.

## Preview
Open `index.html` in a browser or publish the folder from a GitHub repository through Settings > Pages > Deploy from a branch > main > / (root).

## Important before making public

1. **Formspree:** The signup form is configured with `https://formspree.io/f/xjywwpwb`. Submit a test entry, check delivery in Formspree, and verify the consent field is stored before launch.
2. **Complete `privacy.html`.** It is a clearly labelled placeholder with `noindex`, not a valid privacy notice. Fill in your business identity/contact, processor, purpose/lawful basis, retention, subscriber rights, and withdrawal instructions before inviting sign-ups. Configure provider-side email unsubscribe and any double opt-in as needed.
3. **Original brand assets:** the hero and original social artwork are supplied files. The lantern-roses detail and small logo are extracted from the existing landing-page screenshots, so replace with source-resolution original files when available.
4. **Do not overwrite the live domain yet.** Review this GitHub Pages preview first, then point the custom domain when ready. Ensure the old `/mailinglist` links redirect or continue to work.
5. Update social-sharing and brand social links once final, if desired. No social accounts are linked in this version to avoid guessing URLs.

## Structure
- `index.html` — landing page
- `privacy.html` — privacy placeholder
- `assets/site.css` — responsive styling
- `assets/site.js` — safe sign-up handling
- `assets/` — supplied and screenshot-derived imagery

## Latest amendments
- Removed the text overlay captions on the main photograph and the small masthead tagline.
- Switched the sign-up form to a Formspree `action` endpoint, with inline error/success feedback. The House of Rose & Lantern Formspree endpoint is now configured.

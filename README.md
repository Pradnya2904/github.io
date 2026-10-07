# Pradnya Mane — Portfolio

A static HTML5, CSS3, Bootstrap 5.3.3, and vanilla JavaScript website. Bootstrap is stored locally in `assets/vendor/` (MIT licensed). No build process, tracking, contact backend, or paid tools are required.

## Preview

Open this folder in VS Code. Install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**. Use the local server URL for testing; opening the file directly may prevent resume-file validation. Edit files and refresh to see changes.

## Personal settings

Edit `window.portfolioConfig` at the top of `assets/js/projects.js`:

- `email`: your email address; creates a mailto link. Configured as mpradnya5@gmail.com.
- `phone`: your telephone number; creates a tel link. Configured as +91 9075367785.
- `linkedin` and `github`: full HTTPS profile URLs.
- `resume`: place a real PDF in `assets/documents/`, then set a relative path such as `assets/documents/Pradnya-Mane-Resume.pdf`. A link appears only after the server confirms the file exists. Check the PDF opens correctly before publishing.
- `additionalSkills`: add only skills you confirm. Empty values remain hidden.

There is no simulated contact form. Email and telephone links are configured. Edit the static contact notice in `index.html` if desired.

## Project screenshots

Place screenshots you are allowed to use in `assets/images/`. WebP or compressed PNG/JPEG works well. Update a project's `screenshots` object in `assets/js/projects.js`:

```js
screenshots: {
  desktop: { src: 'assets/images/bank-desktop.webp', alt: 'Tasgaon Urban Bank home page on desktop', width: 1440, height: 900 },
  mobile: { src: 'assets/images/bank-mobile.webp', alt: 'Tasgaon Urban Bank navigation and home page on mobile', width: 390, height: 844 }
}
```

Use the actual image dimensions and describe what the image shows. Both screenshot versions appear in project details when configured; the featured cards use logos rather than screenshots. Screenshots are optional and appear only in project details when configured. Project cards use local website logos, with a text fallback if a logo is unavailable. Failed screenshots display an unavailable notice. All paths are relative to `index.html`, including when deployed beneath a repository path. Never start asset paths with `/`.

## Confirm your contribution

Project `features` are public website descriptions. They are deliberately separate from `contributions` and `technologies`, which begin empty and stay hidden. Add only work you personally completed and technology you can confirm, for example `contributions: ['Created responsive page layouts']`, if true. Do not infer backend behaviour from visible UI or claim complete authorship. Edit names, overviews, notes, URLs, or features in the same data file. The bus collection uses `[city, exact website name, URL]` entries.

The no-JavaScript project summaries and bus links are in `index.html`; keep these in sync if changing project names or URLs. Navigation and introduction work without JavaScript, and the native collection can still expand. Interactive filtering, dialogs, and configured contacts require JavaScript.

## Publish free with GitHub Pages

1. Create a **public** GitHub repository. Use `YOUR-USERNAME.github.io` for your profile website, or another repository name for `YOUR-USERNAME.github.io/REPOSITORY/`.
2. Upload the entire folder contents, including `assets/`, with `index.html` at the repository root. Commit to the `main` branch.
3. Open repository **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose **main** and **/ (root)** as the publishing source, then click **Save**.
5. When GitHub provides the published URL, open it and verify the site, resume, contact links, and project links. Future commits to `main` update the site.

## Review checklist

Test at 360, 768, 1024, and 1440px widths. Check the mobile menu, section buttons, all category filters, each modal (Tab, Escape, close button, and focus return), transportation expand/collapse, mixed-case city searches, clear search, no-results message, and back-to-top. Check missing screenshots and a missing resume, which must not produce broken public links. With JavaScript disabled, confirm introduction and live project links remain readable. Confirm all supplied external URLs and personal details before publishing; external websites can change independently.

## Visual design

The Novabiz reference informed the dark hero, circular toolkit, numbered project cards, section navigator, and subtle entrances. Portfolio content remains specific to Pradnya. Entrance and ring animations respect reduced-motion settings; scroll is never intercepted or locked.

## Still needed

Optional LinkedIn and GitHub URLs, optional resume PDF, optional approved desktop/mobile screenshots, and confirmed personal contributions and technology stacks for each project. No employer, years of experience, certification, outcome metric, or unconfirmed implementation is asserted.


## Project logos

Logos are saved locally in assets/images/logos/ from the public project websites. Main-project logo paths live in each project’s logo object. City logo paths live in window.portfolioBusLogos at the end of assets/js/projects.js. Ten city logos are configured; the other four retain their exact website names. The collection icon is a neutral collection symbol, not a shared brand. Client logos identify the referenced sites; they are not testimonials or endorsement claims.


## Expanded catalogue

The catalogue contains ten project cards (including the bus collection). At desktop widths of 1200px and above, five cards appear per row; medium desktops use three, tablets two, and phones one. Category filters are generated from project data, including Technology and Events. New project descriptions summarize public website content; contributions and technology stacks remain unconfirmed and hidden.


# GitHub Pages published site

Exactly what gets pushed to GitHub Pages. The root holds only `index.html` and this README; everything else is in folders.

```
index.html                 About — the start page (the name GitHub Pages looks for)
README.md
site-files/
  styles/                  every css, one folder per page kind
    common-styles/         all pages: site-common-base-style.css (colors, top bar, text)
    index-page-styles/     index.html only
    archive-page-styles/   the year / month / week list page
    weekly-effect-styles/  one folder per look of a week's pages — dark-default-style/ now; add white-style, halloween-style, ... as new folders
  scripts/                 every js
    common-scripts/        site-common-language.js (한국어 / English switch)
  archive-page/            the year / month / week list page (html)
Diary/
  2026/10-w4/              one week: weekly-post-page.html (text first) and weekly-effect-page.html (the effect)
```

- A new week: add `Diary/<year>/<month>-w<n>/`, copy the two pages, and link the style css you want. Add its line to the list page.
- Pictures and other special files: add a folder under `site-files/` (for example `site-files/images/`).
- Still placeholders: the name, the introduction and the week's post text. Comments (giscus) are not wired yet — they need the user's GitHub repository.

# juee-j.github.io

Personal site. Plain HTML, CSS and ~40 lines of JavaScript. No build step, no
dependencies, nothing to install. You edit a file, push it, and the site updates.

---

## Testing it before anyone sees it

**Quickest:** unzip the folder and double-click `index.html`. It opens in your
browser and everything works: navigation, layout, the mobile menu, the CV link.

**Slightly better:** run a local server. This matches how GitHub will actually
serve the site, so paths behave identically and the 404 page works.

```bash
cd site
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser. `Ctrl+C` in the terminal
stops it. Every browser refresh picks up whatever you just saved, so you can
edit and reload without restarting anything.

To check the mobile layout without a phone: open the site in Chrome, press
`Cmd+Option+I` (Mac) or `F12` (Windows), then click the little
phone/tablet icon in the top-left of the panel that opens.

---

## Putting it live

GitHub Pages only publishes from a **public** repository on a free account.
Private repos need GitHub Pro, which is free for students through the GitHub
Student Developer Pack. Public is the normal choice for an academic site.

1. Create a repository named exactly `juee-j.github.io`.
   The name is not optional: that exact pattern is what makes GitHub serve it
   at the root domain rather than in a subfolder.
2. Upload every file and folder from here, keeping the structure intact.
   Without the terminal: **Add file → Upload files**, then drag the contents in.
3. **Settings → Pages**. Source: **Deploy from a branch**, branch `main`,
   folder `/ (root)`. Save.
4. Wait a minute or two. The site appears at **https://juee-j.github.io**

Terminal version:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/juee-j/juee-j.github.io.git
git push -u origin main
```

Later changes: edit, `git add .`, `git commit -m "..."`, `git push`.

---

## Images: exactly 7

| File | What it is | Shape |
|---|---|---|
| `assets/portrait.jpg` | Homepage photo | 4:5 portrait, crop before uploading |
| `assets/archive/01.jpg` … `06.jpg` | Strip at the bottom of About | square |

All seven are grey placeholders right now. Keep each under ~400 KB so the page
stays fast. The archive is not fixed at six: delete `<figure>` blocks in
`about.html` to use fewer, copy one to use more. Four good images beat six with
two duds.

---

## What's where

```
index.html          Homepage: portrait, one-line statement, research threads, selected work
research.html       The questions. Prose, no repo links.
publications.html   The Physica D paper.
projects.html       Six curated projects with results.
about.html          Background, education, opinions, interests, image archive.
contact.html        Email and links.
404.html            Shown for broken links.

styles.css          All styling. Colours are at the very top.
script.js           Mobile menu, and underlining the current page in the nav.

assets/             favicon, portrait, archive images
cv/                 Juee_Jahagirdar_CV.pdf
```

---

## Things you will want to change

**Colours.** Top of `styles.css`:

```css
--navy:  #2F4156;   /* text, rules */
--teal:  #567C8D;   /* links */
--beige: #F5EFEB;   /* page background */
--sky:   #C8D9E6;   /* hairlines, keyword chips */
```

Change a value there and it changes everywhere.

**The navigation** is repeated at the top of each HTML file, because there's no
build step to share it. Add a page and you paste the `<nav>` block in and add a
link to the other six. Annoying but honest: it's the price of zero dependencies.

**Dead links.** Anything with `data-placeholder` currently goes nowhere:
Google Scholar, LinkedIn, Letterboxd, Goodreads. Fill them in or delete them.
An empty link is worse than a missing one. The DOI is now live and correct.

**The `.todo` boxes** are notes to you, not site content. Delete each one once
you've written that section. When they're all gone, delete the `.todo` rule at
the bottom of `styles.css` too.

**`.nojekyll`** is an empty file that stops GitHub running Jekyll over the site.
Leave it.

---

## Doodles

Your sketchbook page, cut into 32 transparent PNGs and recoloured navy so they
sit in the palette. Nineteen are named in `assets/doodles/`; the rest are in
`assets/doodles/extras/` under their original numbers.

They appear in three places: a scatter under the interests list on About, four
small marks in the footer, one on the 404 page, and an envelope on Contact.
That is on purpose. They are deliberately **not** a page background. See the
note in the reply that came with this, or just trust the restraint.

To add one anywhere:

```html
<img class="doodle" src="assets/doodles/mushroom.png" alt="" aria-hidden="true"
     style="height:60px;">
```

`aria-hidden` keeps them out of screen readers, which is correct for
decoration. Set the height in CSS or inline; width follows automatically.

To remove them all: delete the `.doodle` blocks at the bottom of `styles.css`
and the `<img class="doodle">` tags. Nothing else depends on them.

---

## Updating the CV

Replace `cv/Juee_Jahagirdar_CV.pdf`, keeping the filename. Every link points at
that path, so nothing else changes.

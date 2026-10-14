# npretnar.com

Personal academic site, built with [Jekyll](https://jekyllrb.com) and hosted on
GitHub Pages. Content lives in plain YAML/Markdown files; the layout never
needs touching for routine updates.

## Where things live

| To change…                       | Edit                          |
| -------------------------------- | ----------------------------- |
| Home page bio                    | `index.md`                    |
| Affiliation line, CV/Scholar/SSRN buttons | `_data/profile.yml`  |
| Papers, abstracts, talks         | `_data/research.yml`          |
| Upcoming seminars line           | `upcoming:` at the top of `_data/research.yml` |
| Courses                          | `_data/teaching.yml`          |
| Conferences                      | `_data/conferences.yml`       |
| Media appearances                | `_data/media.yml`             |
| Nav menu                         | `nav:` in `_config.yml`       |
| Headshot                         | `assets/img/headshot.jpg`     |
| Look and feel                    | `assets/css/style.css`        |

### Common edits to `_data/research.yml`

**Add a talk** — add a line under the paper's `talks:` (newest year first):

```yaml
        talks:
          2027: University of Chicago; SED, Lisbon
          2026: Hitotsubashi University
```

**R&R → accepted** — cut the paper's block, paste it under
`Publications and Accepted Papers`, delete `status:`, and fill in
`journal`, `volume`, `issue`, `month`, `year`.

**New paper** — copy an existing block and edit it. Only `title` is required.
Leave out any field you don't need; the page adapts.

Two YAML gotchas:

- Indentation matters (spaces, never tabs). Keep new blocks aligned with their
  neighbors.
- Put quotes around a value that contains a colon followed by a space, e.g.
  `journal: "AEJ: Macroeconomics"`.

### PDFs

Papers, appendices and slides live in `papers/`; the CV is `cv.pdf` at the
top level (served at `npretnar.com/cv.pdf`). File names are deliberately
undated, so a link never changes when you post a revision:

- **Revised draft:** replace the file, keeping the same name.
- **New paper:** add `papers/some-short-name.pdf` and set
  `url: /papers/some-short-name.pdf` on the paper in `_data/research.yml`.

## Editing without installing anything

On github.com, open a file, click the pencil icon, edit, and **Commit
changes**. The site rebuilds and goes live in about a minute (watch the
**Actions** tab; a red X means the build failed, usually a YAML indentation
slip, and the live site stays as it was).

## Previewing locally

One-time setup (macOS):

```sh
brew install ruby
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc   # then open a new terminal
bundle install
```

Then, from this folder:

```sh
bundle exec jekyll serve --livereload
```

and open <http://localhost:4000>. Pages reload as you save.

## Deployment

Pushing to `main` runs `.github/workflows/pages.yml`, which builds the site and
publishes it to GitHub Pages. The custom domain (`www.npretnar.com`) is set in
the repo under Settings → Pages → Custom domain, not in a file.

Old Google Sites URLs (`/home`, `/research`, `/teaching`, `/media`,
`/conferences-organized`) all still resolve.

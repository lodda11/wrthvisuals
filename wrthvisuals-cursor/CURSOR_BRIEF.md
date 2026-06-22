# Build brief: WRTHVISUALS portfolio site

You are building a portfolio site for an AI creative studio called WRTHVISUALS
(WRTH = "worth"). It shows cinematic AI-rendered campaign work for clothing and
lifestyle brands. Audience: brands and artists deciding whether to trust this
studio to run a project. The site's one job is to let the work speak.

## Stack (do not deviate)
- Plain HTML, CSS, vanilla JS. No frameworks, no build step, no npm.
- Must run by opening index.html directly and must deploy to GitHub Pages as-is.
- Add an empty `.nojekyll` file.

## Structure
- `index.html` — landing page. One large featured project at top, the rest in a grid below.
- `project.html` — a SINGLE reusable project-detail template that reads `?id=slug`
  from the URL and renders the matching project from the data file.
- `data/projects.js` — a single JS file exporting an array of project objects.
  THE WHOLE POINT: adding a new campaign = adding one object to this array and
  dropping images in a folder. Nothing else. No HTML editing.
- `assets/<slug>/` — one folder per project for its images/video.

### Project object shape
```js
{
  slug: "nba-night",
  title: "NBA × Luxury Night Campaign",
  year: "2026",
  role: "Direction, styling, edit",
  type: "Concept study — AI photography + motion",
  tools: ["Freepik / Nano Banana Pro", "Kling 3.0", "Photoshop"],
  blurb: "One or two sentences describing the concept.",
  cover: "assets/nba-night/cover.jpg",   // used on landing grid
  video: "assets/nba-night/campaign.mp4", // optional, poster = cover
  gallery: ["assets/nba-night/01.jpg", "assets/nba-night/02.jpg"]
}
```
The first project in the array is the featured (large) one on the landing page.

## Pages behaviour
- index.html: hero, then featured project (big video/cover + title), then a grid
  of the remaining projects (cover + title + year). Each card links to
  `project.html?id=slug`.
- project.html: title block (title, year, role, type, tools), the video if present,
  then the gallery grid, then a "back to work" link. Reads the id param, finds the
  project in the array, injects content with JS. If id is missing/unknown, redirect
  to index.html.

## Design language (match exactly — this is established)
- Dark, cinematic, editorial. Background #0a0a0b, ink #f2f0ec, muted #7d7d83,
  hairline #1e1e21, single red accent #e0241f used sparingly.
- Display/headlines: Archivo (weights 700/900), UPPERCASE, very tight line-height
  (~.85), big. Body/captions: Archivo Narrow. Load from Google Fonts.
- Logo lockup: "WRTH·VISUALS" with the middle dot in red.
- Nav is fixed, uses `mix-blend-mode: difference` so it inverts over imagery.
- Film-frame treatment on the featured video: 1px border + four small L-shaped
  corner brackets.
- Grid is controlled and tight, NOT full-bleed. Images sit in a 12-col grid with
  ~14px gaps and fixed aspect ratios (mix of 3/4 and 3/5). Keep images modest in
  size — this is a lookbook, not a wallpaper dump.
- Footer: huge "WRTH." wordmark, link to instagram.com/wrthvisuals, and a line
  stating all work is AI-rendered concept / portfolio study. KEEP THAT LINE.

## Quality floor
- Responsive down to mobile (single column under ~760px).
- Visible keyboard focus, respect prefers-reduced-motion.
- Compress all video to web (<3MB each, H.264, faststart). Images max 1080px wide, ~82% jpg.
- Lazy-load gallery images.

## Deploy note to include in README.md
Repo named `<username>.github.io`, upload all files, Settings → Pages →
deploy from main branch, root. Live in ~2 min.

## First content
Project 1 (featured) is the NBA night campaign — assets already exist.
Five more projects are coming; scaffold them as empty objects with placeholder
covers so the grid is full, and leave a comment showing exactly how to fill one in.

---

## STATUS — what's already in this folder
- `data/projects.js` is ALREADY WRITTEN with all 3 real projects (Marcelli featured,
  Glacial Golf, NBA night). Use it as-is; do not invent placeholder projects.
- All images and the NBA video are ALREADY in `assets/<slug>/`, web-optimized.
- You only need to build: index.html, project.html, styles, .nojekyll, README.md.
- Marcelli is project #1 = the large featured block. The other two go in the grid below.

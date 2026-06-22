# WRTHVISUALS

Portfolio site for WRTHVISUALS — cinematic AI-rendered campaign work for clothing and lifestyle brands.

Plain HTML, CSS, and vanilla JS. No build step.

## Run locally

ES module imports require a local server (opening `index.html` directly via `file://` is blocked by browsers):

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

## Deploy to GitHub Pages

1. Create a repo named `<username>.github.io`.
2. Upload all files to the root of the repo (keep `.nojekyll`).
3. Go to **Settings → Pages → Deploy from branch → main → /**.
4. Live in ~2 minutes at `https://<username>.github.io`.

## Add a campaign

1. Drop images (and optional video) in `assets/<slug>/`.
2. Add one object to the `projects` array in `data/projects.js`:

```js
{
  slug: "my-campaign",
  title: "My Campaign Title",
  year: "2026",
  role: "Direction, styling, edit",
  type: "Concept study — AI photography",
  tools: ["Freepik / Nano Banana Pro", "Photoshop"],
  blurb: "One or two sentences describing the concept.",
  cover: "assets/my-campaign/cover.jpg",
  video: "assets/my-campaign/campaign.mp4", // optional
  gallery: [
    "assets/my-campaign/01.jpg",
    "assets/my-campaign/02.jpg"
  ]
}
```

The **first** project in the array is the large featured block on the landing page. Everything else appears in the grid below.

No HTML editing required.

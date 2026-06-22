import { projects } from "../data/projects.js";

function filmFrame(mediaHtml) {
  return `
    <div class="film-frame">
      ${mediaHtml}
      <span class="film-frame__corner film-frame__corner--tl" aria-hidden="true"></span>
      <span class="film-frame__corner film-frame__corner--tr" aria-hidden="true"></span>
      <span class="film-frame__corner film-frame__corner--bl" aria-hidden="true"></span>
      <span class="film-frame__corner film-frame__corner--br" aria-hidden="true"></span>
    </div>`;
}

function featuredMedia(project) {
  if (project.video) {
    return filmFrame(`
      <video src="${project.video}" poster="${project.cover}" muted loop playsinline autoplay></video>`);
  }
  return filmFrame(`<img src="${project.cover}" alt="${project.title}" loading="eager">`);
}

function renderFeatured(project) {
  const el = document.getElementById("featured");
  if (!el || !project) return;

  el.innerHTML = `
    <div class="container">
      <a href="project.html?id=${project.slug}" class="featured-link grid-12">
        <div class="featured-media-wrap">
          ${featuredMedia(project)}
        </div>
        <div class="featured-meta">
          <p class="featured-label">Featured</p>
          <h2 class="featured-title">${project.title}</h2>
        </div>
        <p class="featured-year">${project.year}</p>
        <p class="featured-blurb">${project.blurb}</p>
      </a>
    </div>`;
}

function renderGrid(items) {
  const el = document.getElementById("project-grid");
  if (!el) return;

  el.innerHTML = items
    .map(
      (p) => `
    <a href="project.html?id=${p.slug}" class="project-card">
      <div class="project-card__img">
        <img src="${p.cover}" alt="${p.title}" loading="lazy" width="540" height="720">
      </div>
      <h3 class="project-card__title">${p.title}</h3>
      <p class="project-card__year">${p.year}</p>
    </a>`
    )
    .join("");
}

const [featured, ...rest] = projects;
renderFeatured(featured);
renderGrid(rest);

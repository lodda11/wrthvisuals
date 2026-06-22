import { projects } from "../data/projects.js";

function getProjectId() {
  return new URLSearchParams(window.location.search).get("id");
}

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

function renderTools(tools) {
  return tools.map((t) => `<span>${t}</span>`).join("<br>");
}

function renderGallery(images) {
  return images
    .map(
      (src, i) => `
    <figure class="gallery-item gallery-item--portrait">
      <img src="${src}" alt="" loading="${i < 2 ? "eager" : "lazy"}" width="540" height="720">
    </figure>`
    )
    .join("");
}

function renderProject(project) {
  document.title = `${project.title} — WRTHVISUALS`;

  const videoSection = project.video
    ? `<div class="project-video">${filmFrame(
        `<video src="${project.video}" poster="${project.cover}" controls playsinline preload="metadata"></video>`
      )}</div>`
    : "";

  const root = document.getElementById("project-content");
  root.innerHTML = `
    <header class="project-header">
      <div class="container grid-12">
        <h1 class="project-header__title">${project.title}</h1>
        <p class="project-header__year">${project.year}</p>
        <div class="project-meta">
          <div class="meta-block">
            <p class="meta-label">Role</p>
            <p class="meta-value">${project.role}</p>
          </div>
          <div class="meta-block">
            <p class="meta-label">Type</p>
            <p class="meta-value">${project.type}</p>
          </div>
          <div class="meta-block meta-block--wide">
            <p class="meta-label">Tools</p>
            <p class="meta-value">${renderTools(project.tools)}</p>
          </div>
          <p class="meta-blurb">${project.blurb}</p>
        </div>
      </div>
    </header>

    <div class="container grid-12">
      ${videoSection}
    </div>

    <div class="container gallery grid-12">
      ${renderGallery(project.gallery)}
    </div>

    <div class="container">
      <a href="index.html" class="back-link">Back to work</a>
    </div>`;
}

const id = getProjectId();
const project = projects.find((p) => p.slug === id);

if (!project) {
  window.location.replace("index.html");
} else {
  renderProject(project);
}

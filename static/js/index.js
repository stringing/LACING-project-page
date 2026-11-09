"use strict";

document.querySelectorAll(".filterable-results").forEach((group) => {
  const filters = [...group.querySelectorAll("[data-filter]")];
  const panels = [...group.querySelectorAll(".result-panel")];
  const status = group.querySelector("[data-filter-status]");

  function updateResults() {
    let activePanel;
    panels.forEach((panel) => {
      panel.hidden = !filters.every(
        (filter) => panel.dataset[filter.dataset.filter] === filter.value,
      );
      if (!panel.hidden) activePanel = panel;
    });
    status.textContent = `Showing ${activePanel.querySelector("h3").textContent}.`;
  }

  filters.forEach((filter) => filter.addEventListener("change", updateResults));
  updateResults();
  group.querySelector(".result-filters").hidden = false;
});

const figureDialog = document.getElementById("figure-dialog");
const dialogImage = document.getElementById("figure-dialog-image");
const dialogTitle = document.getElementById("figure-dialog-title");
const originalFigure = document.getElementById("original-figure");
const dialogViewport = document.querySelector(".dialog-viewport");
const zoomButton = document.getElementById("zoom-figure");

function resetZoom() {
  dialogViewport.classList.remove("is-zoomed");
  zoomButton.setAttribute("aria-pressed", "false");
  zoomButton.textContent = "Zoom in";
}

document.querySelectorAll("[data-zoom]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (
      typeof figureDialog.showModal !== "function" ||
      event.ctrlKey || event.metaKey || event.shiftKey || event.altKey
    ) return;
    event.preventDefault();
    dialogImage.src = link.href;
    dialogImage.alt = link.querySelector("img").alt;
    dialogTitle.textContent = link.dataset.caption;
    originalFigure.href = link.href;
    resetZoom();
    figureDialog.showModal();
    dialogViewport.scrollTo(0, 0);
  });
});

zoomButton.addEventListener("click", () => {
  const expanded = dialogViewport.classList.toggle("is-zoomed");
  zoomButton.setAttribute("aria-pressed", String(expanded));
  zoomButton.textContent = expanded ? "Zoom out" : "Zoom in";
});
document.getElementById("close-figure").addEventListener("click", () => figureDialog.close());
figureDialog.addEventListener("click", (event) => {
  if (event.target === figureDialog) figureDialog.close();
});
figureDialog.addEventListener("close", resetZoom);

const copyButton = document.getElementById("copy-citation");
const copyStatus = document.getElementById("copy-status");
copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  const citation = document.getElementById("bibtex").textContent;
  if (!navigator.clipboard?.writeText) {
    copyStatus.textContent = "Clipboard access is unavailable here. Select and copy the BibTeX below.";
    return;
  }
  try {
    await navigator.clipboard.writeText(citation);
    copyStatus.textContent = "BibTeX copied.";
  } catch (error) {
    console.error("Could not copy the citation:", error);
    copyStatus.textContent = "Copy failed. Select and copy the BibTeX below.";
  }
});

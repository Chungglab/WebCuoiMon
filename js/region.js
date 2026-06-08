function filterRegions(zone, btn) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  document.querySelectorAll(".region-card").forEach((card) => {
    if (zone === "all" || card.dataset.zone === zone) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

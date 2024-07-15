const cards = document.querySelectorAll(".stat-card");
cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    cards.forEach((c) => (c.style.opacity = "0.5"));
    card.style.opacity = "1";
  });
  card.addEventListener("mouseout", () => {
    cards.forEach((c) => (c.style.opacity = "1"));
  });
});

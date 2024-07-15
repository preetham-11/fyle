const detailItems = document.querySelectorAll(".detail-item");
const projectImage = document.getElementById("projectImage");

detailItems.forEach((item) => {
  item.addEventListener("click", function () {
    detailItems.forEach((i) => i.classList.remove("active"));

    this.classList.add("active");

    const newImageSrc = this.getAttribute("data-image");
    projectImage.src = newImageSrc;
  });
});

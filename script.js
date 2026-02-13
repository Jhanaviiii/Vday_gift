let currentPage = 0;
const slider = document.querySelector(".slider");
const totalPages = 6;

function nextPage() {
  if (currentPage < totalPages - 1) {
    currentPage++;
    slider.style.transform = `translateX(-${currentPage * 100}vw)`;
  }
}

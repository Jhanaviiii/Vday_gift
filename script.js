const pages = document.querySelectorAll(".page");
let currentPage = 0;

function nextPage() {
  pages[currentPage].classList.remove("active");
  currentPage++;
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("active");
  }
}

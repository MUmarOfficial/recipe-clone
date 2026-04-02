const nav_links = document.querySelectorAll(".nav-btn");

nav_links.forEach((nav_link) => {
  nav_link.addEventListener("click", function () {
    nav_links.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

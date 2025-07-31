
  document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); // e.g., 'contact.html'

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href").split("/").pop();
      
      // Match with or fallback to index.html if blank
      if (currentPage === linkPage || (currentPage === "" && linkPage === "index.html")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

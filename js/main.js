const menuBtn = document.querySelector(".hamburger-menu");
const learnMore = document.querySelector(".btn");
const logo = document.querySelector(".logo-img");
const dropdownMenu = document.querySelector(".dropdown-menu");
const removeMenu = document.querySelector(".dropdown-menu-toggle");

menuBtn.addEventListener("click", function () {
  dropdownMenu.classList.add("menu-active");
});

removeMenu.addEventListener("click", function () {
  dropdownMenu.classList.remove("menu-active");
});


// menu scroll events
let navLinks = document.querySelectorAll(".nav-link-items-m");
let navLinksD = document.querySelectorAll(".nav-link-items-d");

function scrollToPercentage(element, percentage) {
  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const viewportHeight = window.innerHeight;
  const scrollToPosition = elementTop - (viewportHeight * percentage) / 100;

  window.scrollTo({
    top: scrollToPosition,
    behavior: "smooth",
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", function () {

    if (link.childNodes[0].classList.value === "home") {
      scrollToPercentage(document.querySelector(".hero-section"), 15);
      dropdownMenu.classList.remove("menu-active");
    } else if (link.childNodes[0].classList.value === "about") {
      scrollToPercentage(document.querySelector(".about-title"), 15);
      dropdownMenu.classList.remove("menu-active");
    } else if (link.childNodes[0].classList.value === "skills") {
      scrollToPercentage(document.querySelector(".skills-title"), 15);
      dropdownMenu.classList.remove("menu-active");
    } else if (link.childNodes[0].classList.value === "projects") {
      scrollToPercentage(document.querySelector(".projects-title"), 15);
      dropdownMenu.classList.remove("menu-active");
    } else if (link.childNodes[0].classList.value === "contacts") {
      scrollToPercentage(document.querySelector(".contact-me-title"), 15);
      dropdownMenu.classList.remove("menu-active");
    }
  });
});

navLinksD.forEach((link) => {
  link.addEventListener("click", function () {

    if (link.childNodes[0].classList.value === "home") {
      scrollToPercentage(document.querySelector(".hero-section"), 15);
      dropdownMenu.classList.remove("menu-active");
    } else if (link.childNodes[0].classList.value === "about") {
      scrollToPercentage(document.querySelector(".about-title"), 15);
      dropdownMenu.classList.remove("menu-active");
    } else if (link.childNodes[0].classList.value === "skills") {
      scrollToPercentage(document.querySelector(".skills-title"), 15);
      dropdownMenu.classList.remove("menu-active");
    } else if (link.childNodes[0].classList.value === "projects") {
      scrollToPercentage(document.querySelector(".projects-title"), 15);
      dropdownMenu.classList.remove("menu-active");
    } else if (link.childNodes[0].classList.value === "contacts") {
      scrollToPercentage(document.querySelector(".contact-me-title"), 15);
      dropdownMenu.classList.remove("menu-active");
    }
  });
});

learnMore.addEventListener("click", function () {
  scrollToPercentage(document.querySelector(".projects-title"), 15);
});

logo.addEventListener("click", function () {
  scrollToPercentage(document.querySelector(".hero-section"), 15);
});

document.addEventListener("click", function (e) {
  const isClickInside =
    dropdownMenu.contains(e.target) || menuBtn.contains(e.target);

  if (!isClickInside) {
    dropdownMenu.classList.remove("menu-active");
  }
});

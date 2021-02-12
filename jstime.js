// $(".menu-toggle").click(function () {
//   $(".site-nav").toggleClass("site-nav__open", 500);
//   $(this).toggleClass("open");
// });

const toggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navItems = document.querySelectorAll(".link");

toggle.addEventListener("click", function () {
  if (siteNav.classList.contains("site-nav__open")) {
    siteNav.classList.remove("site-nav__open");
    toggle.classList.remove("open");

    siteNav.classList.add("site-nav__closed");
  } else {
    siteNav.classList.remove("site-nav__closed");
    toggle.classList.add("open");

    siteNav.classList.add("site-nav__open");
  }
});

navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (siteNav.classList.contains("site-nav__open")) {
      siteNav.classList.remove("site-nav__open");
      toggle.classList.remove("open");
    }
  });
});

// navItems.addEventListener("click", function () {
//   if (siteNav.classList.contains("site-nav__open")) {
//     siteNav.classList.remove("site-nav__open");
//     toggle.classList.remove("open");
//   }
// });

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
  document.querySelector("#down-arrow").classList.add("hide-button");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
  document.querySelector("#down-arrow").classList.remove("hide-button");
}

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

$(".down-arrow").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".skills-section").offset().top,
    },
    1500
  );
});
$(".down-arrow2").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".projects").offset().top,
    },
    1500
  );
});
$(".up-arrow").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("html").offset().top,
    },
    1500
  );
});
$("#home-link").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("html").offset().top,
    },
    1500
  );
});
$("#about-link").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".skills-section").offset().top,
    },
    1500
  );
});
$("#projects-link").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".projects").offset().top,
    },
    1500
  );
});
$("#down-arrow").click(function () {
  $("#down-arrow").removeClass("animate");
});
$("#down-arrow2").click(function () {
  $("#down-arrow2").removeClass("animate2");
});

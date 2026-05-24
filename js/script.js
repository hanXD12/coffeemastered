console.log("masuk");

// side bar
const navbarNav = document.querySelector(".navbar-nav");

// ketika di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// // search bar
// const searchForm = document.querySelector(".search-form");
// const searchBox = document.querySelector("#search-box");

// document.querySelector("#search-button").onclick = (e) => {
//   searchForm.classList.toggle("active");
//   searchBox.focus();
//   e.preventDefault();
// };

// SEARCH FORM NAVBAR
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  e.preventDefault();

  searchForm.classList.toggle("active");
  searchBox.focus();
};

// SEARCH MENU
const menuCards = document.querySelectorAll(".menu-card");

searchBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();

    const keyword = searchBox.value.toLowerCase();
    let found = false;

    menuCards.forEach((card) => {
      const text = card.textContent.toLowerCase();

      if (text.includes(keyword)) {
        card.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        card.style.boxShadow = "0 0 20px yellow";

        setTimeout(() => {
          card.style.boxShadow = "";
        }, 2000);

        found = true;
      }
    });

    if (!found) {
      alert("Menu tidak ditemukan");
    }
  }
});

// shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

// ketika di klik cartnya
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik luar untuk ilangin nav
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

const itemDetailModal = document.querySelector("#item-detail-modal");
const closeIcon = document.querySelector(".close-icon");

// buka modal
document.addEventListener("click", function (e) {
  if (e.target.closest(".item-detail-button")) {
    e.preventDefault();

    itemDetailModal.classList.add("active");
  }
});

// tutup modal
closeIcon.addEventListener("click", function (e) {
  e.preventDefault();

  itemDetailModal.classList.remove("active");
});
// klik luar modal = tutup modal
window.addEventListener("click", function (e) {
  if (e.target === itemDetailModal) {
    itemDetailModal.classList.remove("active");
  }
});

// smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    const targetPosition = target.offsetTop - 80;
    const startPosition = window.pageYOffset;

    const distance = targetPosition - startPosition;
    const duration = 1000;

    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;

      const timeElapsed = currentTime - start;

      const run = ease(timeElapsed, startPosition, distance, duration);

      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    function ease(t, b, c, d) {
      t /= d / 2;

      if (t < 1) return (c / 2) * t * t + b;

      t--;

      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  });
});

// slider foto
const slides = document.querySelectorAll(".hero-slider .slide");

let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}, 4000);

// slide produk card

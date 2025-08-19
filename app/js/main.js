const burgerBtn = document.querySelector(".header__burger-btn");
const menu = document.querySelector(".menu");

console.log(burgerBtn, menu); 

burgerBtn.addEventListener("click", function () {
  menu.classList.toggle("menu--active");
});

// не встигав підгружатися ДОМ-елемент і ламався слухач, тому:
document.addEventListener("DOMContentLoaded", () => {
  const catalogViewGrid = document.querySelector(".view-mode__btn--grid");
  const canalogViewLine = document.querySelector(".view-mode__btn--line");
  const catalogContentItems = document.querySelector(".catalog__content-items");

  if (catalogViewGrid && canalogViewLine && catalogContentItems) {
    catalogViewGrid.addEventListener("click", () => {
      catalogContentItems.classList.add("catalog__content-items--grid");
      catalogContentItems.classList.remove("catalog__content-items--line");
    });

    canalogViewLine.addEventListener("click", () => {
      catalogContentItems.classList.add("catalog__content-items--line");
      catalogContentItems.classList.remove("catalog__content-items--grid");
    });
  }
  //поки залишу для себе без додавання спільної логіки + є активність кнопки
  const blogViewGrid = document.querySelector(".blog__nav-btn--grid");
  const blogViewLine = document.querySelector(".blog__nav-btn--line");
  const blogList = document.querySelector(".blog__list");

  if (blogViewGrid && blogViewLine && blogList) {
    blogViewGrid.addEventListener("click", () => {
      blogList.classList.add("blog__list--grid");
      blogList.classList.remove("blog__list--line");
      blogViewGrid.classList.add("blog__nav-btn--active");
      blogViewLine.classList.remove("blog__nav-btn--active");
    });

    blogViewLine.addEventListener("click", () => {
      blogList.classList.add("blog__list--line");
      blogList.classList.remove("blog__list--grid");

      blogViewLine.classList.add("blog__nav-btn--active");
      blogViewGrid.classList.remove("blog__nav-btn--active");
    });
  }
});

const swiper = new Swiper(".accessories__slider", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,

  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
});

const rangeSlider = document.querySelector(".range__slider");
const inputMin = document.querySelector(".range__min");
const inputMax = document.querySelector(".range__max");

noUiSlider.create(rangeSlider, {
  start: [300, 3000],
  step: 100,
  range: {
    min: 300,
    max: 3000,
  },
  format: {
    to: (value) => Math.round(value),
    from: (value) => Number(value),
  },
});

rangeSlider.noUiSlider.on("update", (values, handle) => {
  if (handle === 0) {
    inputMin.value = values[0];
  } else {
    inputMax.value = values[1];
  }
});

inputMin.addEventListener("change", () => {
  rangeSlider.noUiSlider.set([inputMin.value, null]);
});

inputMax.addEventListener("change", () => {
  rangeSlider.noUiSlider.set([inputMax.value, null]);
});

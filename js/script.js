//NAVBAR
const navbarCollapsed = document.querySelector(".navbar-collapsed");
const navbarLinks = document.querySelector(".navbar-links");

navbarCollapsed.addEventListener("click", () => {
  navbarLinks.classList.toggle("navbar-links-active");
});

//SLIDER
const arabicaSliderBtn = document.querySelector(".arabica-slider-btn");
const robustaSliderBtn = document.querySelector(".robusta-slider-btn");
const libericaSliderBtn = document.querySelector(".liberica-slider-btn");

const sliders = document.querySelectorAll(".glide");

const arabicaSliderClass = "glide-arabica";
const robustaSliderClass = "glide-robusta";
const libericaSliderClass = "glide-liberica";

sliders.forEach((item) => {
  new Glide(item).mount();
});

function showSlider(sliderToBeShown, sliders) {
  sliders.forEach((slider) => {
    if (slider.classList.contains(sliderToBeShown)) {
      new Glide(slider).mount();
      slider.classList.add("visible");
      slider.classList.remove("hidden");
    } else {
      slider.classList.add("hidden");
      slider.classList.remove("visible");
      new Glide(slider).destroy();
    }
  });
}

arabicaSliderBtn.addEventListener("click", () => {
  arabicaSliderBtn.classList.add("product-slider-btn-active");
  robustaSliderBtn.classList.remove("product-slider-btn-active");
  libericaSliderBtn.classList.remove("product-slider-btn-active");
  //   showSlider(arabicaSliderClass, sliders);
});

robustaSliderBtn.addEventListener("click", () => {
  robustaSliderBtn.classList.add("product-slider-btn-active");
  arabicaSliderBtn.classList.remove("product-slider-btn-active");
  libericaSliderBtn.classList.remove("product-slider-btn-active");
  //   showSlider(robustaSliderClass, sliders);
});

libericaSliderBtn.addEventListener("click", () => {
  libericaSliderBtn.classList.add("product-slider-btn-active");
  arabicaSliderBtn.classList.remove("product-slider-btn-active");
  robustaSliderBtn.classList.remove("product-slider-btn-active");
  //   showSlider(libericaSliderClass, sliders);
});

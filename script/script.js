'use sctrict'
window.addEventListener("load", function () {
  let burger = document.querySelector(".circle-burger");
  let burgerNavbar = document.querySelector(".burger-navbar");

  burger.addEventListener("click", function (event) {
    event.preventDefault();
    burgerNavbar.classList.toggle("visible");
  });

  let navbarButtons = document.querySelectorAll('.burger-navbar a');

  for (let index = 0; index < navbarButtons.length; index++) {
    navbarButtons[index].addEventListener('click', () => {
      burgerNavbar.classList.remove("visible");
    });
  }
});

window.addEventListener("load", function () {
  const navbar = document.querySelector(".navbar");
  const buttonUp = document.querySelector(".btn-up");
  window.onscroll = function () {

    if (window.pageYOffset > 100) {
      navbar.classList.add("scrolled");
      buttonUp.classList.add("visible");
    } else {
      navbar.classList.remove("scrolled");
      buttonUp.classList.remove("visible");
    }
  };
});

window.addEventListener('load', () => {
  let glideOptions = {
    type: 'carousel',
    perView: 4,
    peek: {
      before: 94,
      after: 94
    },
    breakpoints: {
      1600: {
        perView: 3,
        focusAt: 'center',
        peek: {
          before: 124,
          after: 124
        }
      },
      1400: {
        perView: 3,
        focusAt: 'center',
        peek: {
          before: 94,
          after: 94
        }
      },
      1110: {
        perView: 2,
        peek: {
          before: 154,
          after: 154
        }
      },
      850: {
        perView: 2,
        peek: {
          before: 94,
          after: 94
        }
      },
      760: {
        perView: 2,
        peek: {
          before: 34,
          after: 34
        }
      },
      640: {
        perView: 1,
        focusAt: 'center',
        peek: {
          before: 154,
          after: 154
        }
      },
      590: {
        perView: 1,
        focusAt: 'center',
        peek: {
          before: 94,
          after: 94
        }
      },
      468: {
        perView: 1,
        focusAt: 'center',
        peek: {
          before: 64,
          after: 64
        }
      },
      408: {
        perView: 1,
        focusAt: 'center',
        peek: {
          before: 34,
          after: 34
        }
      }
    }
  }
  let glideSlider = new Glide('.glide', glideOptions);
  let galleryButtons = [...Array.from(document.querySelectorAll('.gallery-nav a')),
  ...Array.from(document.querySelectorAll('.gallery-filter'))];
  let slides = Array.from(document.querySelectorAll('.glide__slide'));
  let glideBox = document.querySelector('.glide__slides');

  glideSlider.mount();
  galleryButtons.forEach(element => {
    element.addEventListener('click', (event) => {
      event.preventDefault();

      galleryButtons.forEach(element => {
        element.classList.remove('active');
      });

      let filter = element.dataset.category;
      glideSlider.destroy();
      glideBox.innerHTML = "";
      let slidesFiltered = slides.filter(element => element.classList.contains(filter));

      slidesFiltered.forEach(element => {
        glideBox.appendChild(element);
      });

      glideSlider = new Glide('.glide', glideOptions);
      glideSlider.mount();

      galleryButtons.forEach(element => {

        if (element.classList.contains('gallery-filter')) {
          window.location.href = '#gallery';
        } else if (element.dataset.category == filter) {
          element.classList.add('active');
        }
      });
    })
  });
});
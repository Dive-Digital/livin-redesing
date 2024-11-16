import './main.scss';

console.log('Hello World!');
document.addEventListener("DOMContentLoaded", () => {

  // header.js
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    const toggleMenu = () => {
      const isOpen = mobileMenu.classList.contains('translate-x-0');
      mobileMenu.classList.toggle('translate-x-0');
      mobileMenu.classList.toggle('translate-x-full');

      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    menuButton.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);
  });
  function openOption(evt, optionName) {
    // Ocultar todas las pestañas de contenido
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
    });

    // Eliminar la clase "active" de todas las opciones de pestaña
    document.querySelectorAll('.tab-option').forEach(option => {
      option.classList.remove('active');
    });

    // Mostrar la pestaña seleccionada y añadir la clase "active" al botón actual
    const selectedTab = document.getElementById(optionName);
    if (selectedTab) {
      selectedTab.style.display = 'block';
    }

    evt.currentTarget.classList.add('active');
  }

  // Asignar la función al objeto global `window` para ser usada en el HTML
  window.openOption = openOption;

  // Realizar clic automáticamente en el elemento "defaultOpen" si está presente
  const defaultTab = document.getElementById("defaultOpen");
  if (defaultTab) {
    defaultTab.click();
  }



  document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todas las tarjetas en la página
    const allCards = document.querySelectorAll('.card');

    // Crear un Set para mantener un registro de los contenedores padres únicos de las tarjetas
    const cardContainers = new Set();

    // Añadir los contenedores padres de cada tarjeta al Set
    allCards.forEach(card => {
      cardContainers.add(card.parentElement);
    });

    // Iterar sobre cada contenedor y ajustar la altura y el ancho de las tarjetas dentro de él
    cardContainers.forEach(container => {
      const cards = container.querySelectorAll('.card');
      let maxHeight = 0;
      let maxWidth = 0;

      // Calcular la altura y el ancho máximos entre las tarjetas del contenedor actual
      cards.forEach(card => {
        if (card.offsetHeight > maxHeight) {
          maxHeight = card.offsetHeight;
        }
        if (card.offsetWidth > maxWidth) {
          maxWidth = card.offsetWidth;
        }
      });

      // Aplicar la altura y el ancho máximos a todas las tarjetas del contenedor actual
      cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
        card.style.width = `${maxWidth}px`;
      });
    });
  });





  // Inicializar Swiper solo si existe un elemento con la clase `mySwiper`
  const swiperContainer = document.querySelector(".swiper-container.mySwiper");
  if (swiperContainer) {
    const swiper = new Swiper(swiperContainer, {

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 15,
        },
      },
    });
  }

  function openOption1(evt, optionName1) {
    // Ocultar todas las pestañas de contenido
    document.querySelectorAll('.tab-content1').forEach(tab => {
      tab.style.display = 'none';
    });

    // Eliminar la clase "active" de todas las opciones de pestaña
    document.querySelectorAll('.tab-option1').forEach(option => {
      option.classList.remove('active');
    });

    // Mostrar la pestaña seleccionada y añadir la clase "active" al botón actual
    const selectedTab1 = document.getElementById(optionName1);
    if (selectedTab1) {
      selectedTab1.style.display = 'block';
    }

    evt.currentTarget.classList.add('active');
  }

  // Asignar la función al objeto global `window` para ser usada en el HTML
  window.openOption1 = openOption1;

  // Realizar clic automáticamente en el elemento "defaultOpen" si está presente
  const defaultTab1 = document.getElementById("defaultOpen1");
  if (defaultTab1) {
    defaultTab1.click();
  }
  const swiperContainer1 = document.querySelector(".swiper-container.mySwiper1");
  if (swiperContainer1) {
    const swiper1 = new Swiper(swiperContainer1, {
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
    });
  }

  function openOption2(evt, optionName2) {
    // Ocultar todas las pestañas de contenido
    document.querySelectorAll('.tab-content2').forEach(tab => {
      tab.style.display = 'none';
    });

    // Eliminar la clase "active" de todas las opciones de pestaña
    document.querySelectorAll('.tab-option2').forEach(option => {
      option.classList.remove('active');
    });

    // Mostrar la pestaña seleccionada y añadir la clase "active" al botón actual
    const selectedTab2 = document.getElementById(optionName2);
    if (selectedTab2) {
      selectedTab2.style.display = 'block';
    }

    evt.currentTarget.classList.add('active');
  }

  // Asignar la función al objeto global `window` para ser usada en el HTML
  window.openOption2 = openOption2;

  // Realizar clic automáticamente en el elemento "defaultOpen" si está presente
  const defaultTab2 = document.getElementById("defaultOpen2");
  if (defaultTab2) {
    defaultTab2.click();
  }
  const swiperContainer2 = document.querySelector(".swiper-container.mySwiper2");
  if (swiperContainer2) {
    const swiper2 = new Swiper(swiperContainer2, {
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
    });
  }
});

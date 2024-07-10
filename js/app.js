document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".bg_home", {
        spaceBetween: 100,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });



    const toggler = document.getElementById('navbarToggler');
    const collapse = document.getElementById('navbarCollapse');
    const bar = document.querySelector('.navbar-toggler-icon');

    toggler.addEventListener('click', function() {
        toggler.classList.toggle('collapsed');
        collapse.classList.toggle('show');
    });

    collapse.addEventListener('click', function() {
        toggler.classList.remove('collapsed');
        collapse.classList.remove('show');
        bar.style.display = 'none';
    });
      const barsIcon = toggler.querySelector('.fa-bars');
      const timesIcon = toggler.querySelector('.fa-times');
  

  
      collapse.addEventListener('click', function() {
          toggler.classList.remove('collapsed');
          collapse.classList.remove('show');
          barsIcon.style.display = 'inline';
          timesIcon.style.display = 'none';
      });
  

 
});

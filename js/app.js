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

      function displayGeoLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const geocoder = new google.maps.Geocoder();

                    geocoder.geocode(
                        { location: { lat: latitude, lng: longitude } },
                        (results, status) => {
                            if (status === "OK") {
                                const address = results[0]?.formatted_address;
                                document.getElementById("geolocation-address").innerText = `Address: ${address}`;
                            } else {
                                console.error("Geocoder failed due to: " + status);
                            }
                        }
                    );
                },
                (error) => {
                    console.error("Error getting user's location: ", error.message);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    function sendEmail() {
        let email = 'toluwalaseraji56@gmail.com'
        var emailAddress = 'aptech@gmail.com';
        var subject = 'Subject of the email'; 
        var mailtoUrl = 'mailto:' + email + '?subject=' + encodeURIComponent(subject);


        window.location.href = mailtoUrl;
    }


  
    window.onload = displayGeoLocation;
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {

            document.getElementById("loader-container").style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 2000); 
    });


    //   const elements = document.querySelectorAll('.scroll-element');

    //     const observer = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 const element = entry.target;
    //                 const delay = element.getAttribute('data-delay') || '0ms';
    //                 element.style.transitionDelay = delay;
    //                 setTimeout(() => {
    //                     element.classList.add('show');
    //                 }, parseFloat(delay));
    //                 observer.unobserve(element); // Stop observing this element
    //             }
    //         });
    //     }, {
    //         threshold: 0.1
    //     });

    //     elements.forEach(element => {
    //         observer.observe(element);
    //     });


  

 
});

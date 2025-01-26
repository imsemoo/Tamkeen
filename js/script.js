$(document).ready(function () {
  // عند التمرير
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("fixed-nav");
    } else {
      $(".navbar").removeClass("fixed-nav");
    }
  });

  $(".owl-suggestions").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    rtl: true,
       navText: [
      '<i class="fas fa-chevron-right"></i>', // Font Awesome right arrow
        '<i class="fas fa-chevron-left"></i>' // Font Awesome left arrow
    ],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});

});

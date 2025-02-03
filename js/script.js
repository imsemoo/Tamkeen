$(document).ready(function () {
  // عند التمرير
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("fixed-nav");
    } else {
      $(".navbar").removeClass("fixed-nav");
    }
  });

  $(".studies-carousel").owlCarousel({
    loop: true, // Continuous loop
    margin: 0, // Spacing between items
    nav: true, // Show navigation arrows
    rtl: true, // Right-to-left direction
    dots: false, // Hide dots
    navText: [
      "<i class='fa-solid fa-chevron-right'></i>",
      "<i class='fa-solid fa-chevron-left'></i>",
    ],
    responsive: {
      0: {
        stagePadding: 50,
        items: 1,
      }, // On small screens: 1 item
      576: { items: 2 }, // On medium screens: 2 items
      992: { items: 3 }, // On large screens: 3 items
    },
  });

  $(".research-carousel").owlCarousel({
    rtl: true, // Enable RTL for Arabic layout
    loop: true, // Infinite looping of slides
    margin: 20, // Space between items
    nav: true, // Show next/prev arrows
    dots: false, // Hide pagination dots (can be true if desired)
    navText: [
      "<i class='fa-solid fa-chevron-right'></i>",
      "<i class='fa-solid fa-chevron-left'></i>",
    ],
    responsive: {
      0: {
        stagePadding: 50,

        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  $(".reports-carousel").owlCarousel({
    rtl: true, // Enable RTL for Arabic
    loop: true, // Infinite loop
    margin: 20, // Space between slides
    nav: true, // Show prev/next arrows
    dots: false, // Hide dots (optional)
    navText: [
      '<i class="fa-solid fa-chevron-right"></i>',
      '<i class="fa-solid fa-chevron-left"></i>',
    ],
    responsive: {
      0: {
        stagePadding: 50,

        items: 1,
      },
      992: {
        items: 1, // We show one "row" with 3 cards in that row (2 small + 1 big)
      },
    },
  });
  $(".courses-carousel").owlCarousel({
    rtl: true, // Use RTL for Arabic layout
    loop: true, // Infinite loop
    margin: 20, // Spacing between cards
    nav: true, // Display next/prev arrows
    dots: false, // Hide pagination dots (optional)
    navText: [
      '<i class="fa-solid fa-chevron-right"></i>',
      '<i class="fa-solid fa-chevron-left"></i>',
    ],
    responsive: {
      0: {
        stagePadding: 50,

        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });
  $(".team-slider").owlCarousel({
    // Enable infinite loop for continuous scrolling
    loop: true,
    // Set margin between slider items in pixels
    margin: 10,
    // Enable navigation arrows for slider control
    navText: [
      '<i class="fa-solid fa-chevron-right"></i>',
      '<i class="fa-solid fa-chevron-left"></i>',
    ],
    nav: true,
    // Activate right-to-left mode for proper Arabic display
    rtl: true,
    // Responsive settings for different viewport widths
    responsive: {
      0: {
        stagePadding: 50,

        items: 1, // Display 1 item on small screens
      },
      600: {
        items: 4, // Display 2 items on medium screens
      },
      1000: {
        items: 6, // Display 3 items on large screens
      },
    },
  });
});

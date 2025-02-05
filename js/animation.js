 // Animate all sections with class "section" as they come into view
 gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });
  // GSAP timeline for the hero section buttons (as before)
  gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power3.out"
      }
    })
    .from(".hero-section .content h1", {
      opacity: 0,
      y: -50
    })
    .from(".hero-section .content h4", {
      opacity: 0,
      y: -30
    }, "-=0.5")
    .from(".hero-section .buttons-group a", {
      opacity: 0,
      x: -30,
      stagger: 0.2
    }, "-=0.5")
    .from(".hero-section img", {
      opacity: 0,
      x: 30
    }, "-=0.5");
  // Button Hover Effect with GSAP (subtle shadow change)
  document.querySelectorAll(".btn").forEach(btn => {
    gsap.set(btn, {
      transformOrigin: "center center"
    });
    let hoverTl = gsap.timeline({
      paused: true
    });
    hoverTl.to(btn, {
      duration: 0.3,
      scale: 1.08,
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
      ease: "power2.out"
    });
    btn.addEventListener("mouseenter", () => {
      hoverTl.play();
      let icon = btn.querySelector("i");
      if (icon) {
        gsap.to(icon, {
          duration: 0.5,
          rotation: 360,
          ease: "power2.out"
        });
      }
    });
    btn.addEventListener("mouseleave", () => {
      hoverTl.reverse();
      let icon = btn.querySelector("i");
      if (icon) {
        gsap.to(icon, {
          duration: 0.5,
          rotation: 0,
          ease: "power2.out"
        });
      }
    });
  });
 
 
 
 // Apply ScrollTrigger animation to all sections for a smooth entrance effect
 gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      // Remove active class from all filter buttons
      filterButtons.forEach(button => button.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");
      galleryItems.forEach(item => {
        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
          item.style.display = "block";
          gsap.fromTo(item, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Load More functionality (initially show 6 items)
  let itemsToShow = 6;
  galleryItems.forEach((item, index) => {
    if (index >= itemsToShow) {
      item.style.display = "none";
    }
  });
  document.getElementById("loadMoreBtn").addEventListener("click", () => {
    itemsToShow += 3;
    galleryItems.forEach((item, index) => {
      if (index < itemsToShow) {
        item.style.display = "block";
        gsap.fromTo(item, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
      }
    });
  });
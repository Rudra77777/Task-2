document.addEventListener("DOMContentLoaded", () => {
  // Navbar slide-in from top
  gsap.to("#navbar", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 0.2
  });

  // Button hover animation
  document.querySelectorAll(".animated-btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.08,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut"
      });
    });
  });

  // Scroll-triggered fade-ins
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".fade-section").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });
});

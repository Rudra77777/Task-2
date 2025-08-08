document.addEventListener("DOMContentLoaded", () => {
  // Navbar slide-in
  gsap.to("#navbar", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 0.2
  });

  // Button pulse on hover
  document.querySelectorAll(".animated-btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.08,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut"
      });
    });
  });

  // Scroll-triggered fade-in
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".fade-section").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });
});

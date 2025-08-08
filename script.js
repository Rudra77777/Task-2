// Navbar Slide-In
gsap.to("#navbar", {
  duration: 1.2,
  y: 0,
  opacity: 1,
  ease: "power2.out",
  delay: 0.3
});

// Button Hover Pulse
document.querySelectorAll(".animated-btn").forEach(button => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, {
      scale: 1.07,
      duration: 0.3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1
    });
  });
});

// Scroll-Triggered Fade-Ins (3+ sections)
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1.2,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

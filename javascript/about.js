function scrollToComment() {
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  gsap.to('.about-page-header', 1.1, { y: -780 });
  gsap.to('.about-text', 1.1, { y: -780 });
  gsap.to('.contact-page-header', 1.1, { y: -780 });

  if (viewportWidth < 601) {
    gsap.to('.form-area', 1.1, { y: -740 });
    gsap.to('#contact-back-button', 1.1, { y: -750 });
  } else {
    gsap.to('.form-area', 1.1, { y: -780 });
    gsap.to('#contact-back-button', 1.1, { y: -790 });
  }
}

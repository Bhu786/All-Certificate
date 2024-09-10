//
// Bootstrap Carousel Effect Ken Burns
// =============================================================================

const html = document.querySelector('html');
html.setAttribute('data-bs-theme', 'dark');

function ready (fn) {
  if (document.readyState != 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

ready(() => {
  // --- Function to add and remove CSS animation classes
  function doAnimations(elems) {
    const animEndEv = 'animationend';

    elems.forEach((elem) => {
      elem.classList.add('animate__animated', 'animate__flipInX');
      elem.addEventListener(animEndEv, () => {
        elem.classList.remove('animate__animated', 'animate__flipInX');
      });
    });
  }

  // --- Variables on page load
  const carouselKenBurns = document.querySelector('#carouselKenBurns');
  const firstAnimatingElems = Array.from(
    carouselKenBurns.querySelector('.carousel-item:first-child')
      .querySelectorAll("[data-animation^='animated']")
  );

  // --- Animate captions in the first slide on page load
  doAnimations(firstAnimatingElems);

  // --- Other slides to be animated on carousel slide event
  carouselKenBurns.addEventListener('slid.bs.carousel', (e) => {
    const animatingElems = Array.from(e.relatedTarget.querySelectorAll("[data-animation^='animated']"));
    doAnimations(animatingElems);
  });
})

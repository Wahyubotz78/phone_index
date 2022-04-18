gsap.registerPlugin(SplitText);
gsap.registerPlugin(TextPlugin);

/*--------------------------------------------------------------- MAKING A BIBLE SELECTION -----------------------------------------------*/
const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const optionsList = document.querySelectorAll('.option');
const searchInput = document.querySelector('.search-input');

selected.addEventListener('click', () => {
  optionsContainer.classList.toggle('active');
  document.querySelector('.verse-text').innerHTML = '';
  document.querySelector('.btns-next').style.visibility = 'hidden';
  document.querySelector('.btn-next-right').style.visibility = 'hidden';
});

optionsList.forEach(selection => {
  selection.addEventListener('click', () => {
    selected.innerHTML = selection.querySelector('span').innerHTML;
    optionsContainer.classList.remove('active');

    if (
      (document.querySelector('.pulsating-circle').style.visibility = 'hidden')
    ) {
      gsap.to('.pulsating-circle', 0.6, { autoAlpha: 1 });
    }
  });
});

//------------------------------------------------------------------ ANIMATE INPUT ON FOCUS ---------------------------------------------*/
function showSearchButton() {
  gsap.to('.pulsating-circle', 0.5, { autoAlpha: 1 });
  gsap.to('.btns-next', 0, { autoAlpha: 0 });
  document.querySelector('.border-select-box').style.border =
    'solid 1px #ffc266';
  document.querySelector('.selected').style.borderRight =
    'solid .1rem transparent';

  if (optionsContainer.classList.toggle('active')) {
    optionsContainer.classList.remove('active');
  }
}

/* ------------------------------------------------------------------ MOVE VERSE CONTAINER -----------------------------------------------*/
let containerHasMoved = false;
let border = document.querySelector('.border-select-box');
function moveContainer() {
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth < 601) {
    document.querySelector('.verse-scroll-container').style.visibility =
      'visible';
  }

  if (!containerHasMoved) {
    border.style.border = 'solid 1px transparent';
    document.querySelector('.selected').style.borderRight =
      'solid .1rem #cfc9c9';

    if (viewportWidth < 601) {
      gsap.to(document.querySelector('.subheading'), 0.3, { autoAlpha: 0 });
      gsap.to(document.querySelector('.search-group'), 0.5, {
        y: -44,
        ease: 'power1.out',
      });
      gsap.to(document.querySelector('.verse-scroll-container'), 0.5, {
        y: -86,
        ease: 'power1.out',
      });
      gsap.to(document.querySelector('.options-container'), 0.5, {
        y: -40,
        ease: 'power1.out',
      });
    } else {
      gsap.to(document.querySelector('.subheading'), 0.7, { autoAlpha: 0 });
      gsap.to(document.querySelector('.search-group'), 0.75, {
        y: -60,
        ease: 'power1.out',
      });
      gsap.to(document.querySelector('.verse-scroll-container'), 0.75, {
        y: -66,
        ease: 'power1.out',
      });
      gsap.to(document.querySelector('.options-container'), 0.75, {
        y: -57,
        ease: 'power1.out',
      });
    }

    gsap.to(
      document.querySelector('.pulsating-circle'),
      0.5,
      { autoAlpha: 0 },
      0.5
    );
    containerHasMoved = true;
    searchButton();
  } else {
    gsap.to('.verse-text', 0, { autoAlpha: 0 });
    gsap.to('.pulsating-circle', 0.5, { autoAlpha: 0 });
    document.querySelector('.selected').style.borderRight =
      'solid .1rem #cfc9c9';
    searchButton();
  }

  if (optionsContainer.classList.toggle('active')) {
    optionsContainer.classList.remove('active');
  }
}

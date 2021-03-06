import Typed from 'typed.js';

const initLoadDynamicSloganText = () => {
  const sloganElement = document.querySelector("#slogan");
  if (!sloganElement) return;

  new Typed(sloganElement, {
    strings: ['Save time. Save life.'],
    typeSpeed: 70,
    loop: true
  });
}

export { initLoadDynamicSloganText };

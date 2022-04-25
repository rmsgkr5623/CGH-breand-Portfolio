let bodyWidth = document.body.clientWidth;
let bodyHeight = document.body.clientHeight;
let isTouch = false;

const cartridge = document.querySelector('.cartridge');

function isTouchDevice() {
  const touchDetected = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
  return touchDetected ? true : false;
}

function init() {
  bodyWidth = document.body.clientWidth;
  bodyHeight = document.body.clientHeight;
  isTouch = isTouchDevice();
  document.body.classList.toggle('touch-device', isTouch);
}

function setAngle(e) {
  const ratioX = e.clientX / bodyWidth;
  const angleX = ratioX * 380 - 180; // -180 to 180
  
  const ratioY = e.clientY / bodyHeight;
  const angleY = ratioY * 189 - 90; // -180 to 180
  cartridge.style.transform = `rotateY(${angleX}deg)`;
}

init();
window.addEventListener('resize', () => init());
document.body.addEventListener('mousemove', e => setAngle(e));

$('.top-menu-box__btn-toggle').click(function() {
  $('html').toggleClass('top-menu-box-actived');
});
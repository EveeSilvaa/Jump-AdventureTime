const bmo = document.querySelector('.bmo');
 const pipe = document.querySelector('.pipe');

const jump = () => {
  bmo.classList.add('jump');

  setTimeout(() => {
   bmo.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => { 

  const pipePosition = pipe.offsetLeft;
  const bmoPosition = +window.getComputedStyle(bmo).bottom.replace('px', '');


  if (pipePosition - 120 && pipePosition > 0 && bmoPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
  }

}, 10);
 
document.addEventListener('keydown', jump);
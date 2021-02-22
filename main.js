const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

window.addEventListener('load', () => {
  document.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(targetHalfHeight);

    vertical.style.transform = `translateX(${x}px)`
    horizontal.style.transform = `translateY(${y}px)`
    tag.style.transform = `translate(${x}px,${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px,${y - targetHalfHeight}px)`;
    tag.innerHTML = `${x},${y}`

    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    // tag.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    // tag.innerHTML = `${x},${y}`
    // target.style.top = `${y}px`;
    // target.style.left = `${x}px`;
  });

});


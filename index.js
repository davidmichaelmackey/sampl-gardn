// rotation animation
const circle = document.querySelector('.circle');
const dot = document.querySelector('.dot');
const diameter = circle.offsetWidth;
const halfDiameter = diameter / 2;
const topOffset = circle.offsetTop;
const bottomOffset = topOffset + diameter;
const maxRotation = 180; // Maximum rotation angle in degrees
const maxScroll = bottomOffset - window.innerHeight; // Maximum scroll distance

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const dotPosition = scrollY * maxRotation / maxScroll; // Calculate dot's position within the circle

  // Calculate dot's coordinates based on its position within the circle
  const x = Math.sin(dotPosition * Math.PI / 180) * halfDiameter;
  const y = Math.cos(dotPosition * Math.PI / 180) * halfDiameter;

  // Set dot's coordinates and rotate it accordingly
  dot.style.transform = `translate(${x}px, ${y}px) rotate(${-dotPosition}deg)`;
});

// Smooth scrolling for links
$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});
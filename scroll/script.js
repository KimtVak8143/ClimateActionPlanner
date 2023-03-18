// Get the image element
const image = document.querySelector('#hero img');

// Add an event listener for scrolling
window.addEventListener('scroll', () => {
  // Calculate the distance scrolled from the top of the page
  const scrollTop = window.scrollY;

  // Calculate the new opacity value based on the distance scrolled
  const opacity = 1 - (scrollTop / 500);

  // Set the opacity value on the image element
  image.style.opacity = opacity.toString();
});

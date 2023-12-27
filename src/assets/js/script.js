const navbar = document.querySelector('.navbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Check if the user has scrolled down (you can adjust the scroll threshold as needed)
  if (window.scrollY > 0) {
    // If scrolled, add the 'navbar-scrolled' class to the 'body'
    document.body.classList.add('navbar-scrolled');
  } else {
    // If not scrolled, remove the 'navbar-scrolled' class from the 'body'
    document.body.classList.remove('navbar-scrolled');
  }
});
const h1 = document.getElementById('main-heading');

// Function to toggle between different colors
function toggleColor() {
  const colors = ['rgb(109, 199, 237)', 'rgb(184, 42, 42)', 'rgb(255, 196, 0)']; // Array of colors
  let currentIndex = 0;

  // Toggle color every 2 seconds
  setInterval(() => {
    h1.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
  }, 1000); // Change color every 2 seconds
}

// Call the toggleColor function to start the color change
toggleColor();
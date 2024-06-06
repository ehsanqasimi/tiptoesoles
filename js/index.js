// Get the dropdown menu element
const dropdownMenu = document.querySelector('.dropdown');

let menuTimer; // Variable to store the timer

// Function to show the dropdown menu
function showDropdownMenu() {
  dropdownMenu.style.display = 'block';
  dropdownMenu.style.opacity = 1;
}

// Function to hide the dropdown menu
function hideDropdownMenu() {
  // Hide dropdown menu after a delay
  menuTimer = setTimeout(function() {
    dropdownMenu.style.display = 'none';
  }, 500); // Adjust the delay time (in milliseconds) as needed
}

// Event listener to show dropdown menu when hovering over "Products" link
document.getElementById('products-link').addEventListener('mouseenter', function() {
  clearTimeout(menuTimer); // Clear the timer
  showDropdownMenu();
});

// Event listener to hide dropdown menu when mouse leaves "Products" link or dropdown menu
document.querySelector('.nav-bar').addEventListener('mouseleave', function() {
  // Hide dropdown menu after a delay
  hideDropdownMenu();
});

// Event listener to keep dropdown menu visible when hovering over it
dropdownMenu.addEventListener('mouseenter', function() {
  clearTimeout(menuTimer); // Clear the timer
  showDropdownMenu();
});

// Event listener to hide dropdown menu when mouse leaves it
dropdownMenu.addEventListener('mouseleave', function() {
  // Hide dropdown menu after a delay
  hideDropdownMenu();
});

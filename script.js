const items = document.querySelectorAll('.box');
let selectedIndex = 0;

// Define URLs for each item
const urls = [
  'https://example.com',      // Item 1
  'https://google.com',       // Item 2
  'https://youtube.com',      // Item 3
  'https://github.com',       // Item 4
  'https://twitter.com',      // Item 5
  'https://facebook.com',     // Item 6
  'https://instagram.com',    // Item 7
  'https://linkedin.com',     // Item 8
  'https://reddit.com',       // Item 9
];

// Initialize the first item as selected
items[selectedIndex].classList.add('selected');

// Arrow key navigation logic
document.addEventListener('keydown', (e) => {
  // Remove the 'selected' class from the current item
  items[selectedIndex].classList.remove('selected');
  
  // Handle arrow keys: Up, Down, Left, Right
  if (e.key === 'ArrowUp' && selectedIndex >= 3) {
    selectedIndex -= 3;
  } else if (e.key === 'ArrowDown' && selectedIndex <= 5) {
    selectedIndex += 3;
  } else if (e.key === 'ArrowLeft' && selectedIndex % 3 !== 0) {
    selectedIndex -= 1;
  } else if (e.key === 'ArrowRight' && selectedIndex % 3 !== 2) {
    selectedIndex += 1;
  }

  // Add the 'selected' class to the new item
  items[selectedIndex].classList.add('selected');
});

// Enter key for selecting an item and navigating to its URL
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    // Get the URL associated with the selected item
    const url = urls[selectedIndex];
    // Open the selected URL in the current tab
    window.location.href = url;
  }
});

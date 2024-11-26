const items = document.querySelectorAll('.box');
let selectedIndex = 0;

// Define content for each item
const contentIds = [
  'content-1',  // Item 1
  'content-2',  // Item 2
  'content-3',  // Item 3
  'content-4',  // Item 4
  'content-5',  // Item 5
  'content-6',  // Item 6
  'content-7',  // Item 7
  'content-8',  // Item 8
  'content-9',  // Item 9
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

// Enter key for selecting an item and displaying the content
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    // Hide all content sections first
    document.querySelectorAll('.content').forEach(content => content.style.display = 'none');
    
    // Show the content for the selected item
    const contentId = contentIds[selectedIndex];
    document.getElementById(contentId).style.display = 'flex';
  }
});

// Escape key for going back to the grid
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Hide all content sections
    document.querySelectorAll('.content').forEach(content => content.style.display = 'none');
  }
});

const items = document.querySelectorAll('.box');
let selectedIndex = 0;

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

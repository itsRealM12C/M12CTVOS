const apps = document.querySelectorAll('.app');
let selectedIndex = 0;

// URLs for iframe content
const urls = [
  'https://example.com',      // APP 1
  'https://google.com',       // APP 2
  'https://youtube.com',      // APP 3
  'https://github.com',       // APP 4
  'https://facebook.com',     // APP 5
];

// Set initial selection
apps[selectedIndex].classList.add('selected');

// Handle navigation with arrow keys
document.addEventListener('keydown', (e) => {
  apps[selectedIndex].classList.remove('selected');

  if (e.key === 'ArrowRight' && selectedIndex < apps.length - 1) {
    selectedIndex++;
  } else if (e.key === 'ArrowLeft' && selectedIndex > 0) {
    selectedIndex--;
  }

  apps[selectedIndex].classList.add('selected');
});

// Handle "Enter" key to open iframe
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const url = urls[selectedIndex];
    document.getElementById('iframe').src = url;
    document.getElementById('iframe-container').style.display = 'flex';
  }
});

    document.addEventListener('keydown',function(e){
     if (typeof VK_BACK === 'undefined') VK_BACK = 461;
        closeIframe();
})

function closeIframe() {
  document.getElementById('iframe-container').style.display = 'none';
  document.getElementById('iframe').src = '';
}

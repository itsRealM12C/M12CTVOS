const apps = document.querySelectorAll('.app');
let selectedIndex = 0;

// URLs for iframe content
const urls = [
  'https://youtube.com/tv?env_forceFullAnimation=1',      // YouTube
  'https://google.com',       // APP 2
  'https://youtube.com',      // APP 3
  'https://github.com',       // APP 4
  'https://facebook.com',     // APP 5
];

// Set initial selection
apps[selectedIndex].classList.add('selected');

// Handle undefined VK_BACK for TV remotes and default it to 461
if (typeof VK_BACK === 'undefined') VK_BACK = 461;

// Handle navigation with arrow keys
document.addEventListener('keydown', (e) => {
  // Check if iframe is open
  const isIframeOpen = document.getElementById('iframe-container').style.display === 'flex';

  if (!isIframeOpen) {
    apps[selectedIndex].classList.remove('selected');

    if (e.key === 'ArrowRight' && selectedIndex < apps.length - 1) {
      selectedIndex++;
    } else if (e.key === 'ArrowLeft' && selectedIndex > 0) {
      selectedIndex--;
    }

    apps[selectedIndex].classList.add('selected');

    // Handle "Enter" key to open iframe
    if (e.key === 'Enter') {
      openIframe(urls[selectedIndex]);
    }
  } else {
    // Handle "A" key or VK_BACK (default 461) to close iframe
    if (e.key === 'A' || e.key === 'a' || e.keyCode === VK_BACK) {
      closeIframe();
    }
  }
});

// Handle "Back" button and "Escape" key to return to the main screen
document.getElementById('back-button').addEventListener('click', closeIframe);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeIframe();
});

function openIframe(url) {
  document.getElementById('iframe').src = url;
  document.getElementById('iframe-container').style.display = 'flex';
}

function closeIframe() {
  document.getElementById('iframe-container').style.display = 'none';
  document.getElementById('iframe').src = '';
}

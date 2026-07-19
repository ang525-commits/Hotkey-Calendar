document.addEventListener('DOMContentLoaded', () => {
  const save = document.getElementById('save');
   save.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'bookmark'});
  });
});

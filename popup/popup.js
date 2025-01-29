document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle');
    const statusDiv = document.getElementById('status');
    
    chrome.storage.sync.get('isActive', (data) => {
      updateUI(data.isActive);
    });
  
    toggleBtn.addEventListener('click', () => {
      chrome.storage.sync.get('isActive', (data) => {
        const newState = !data.isActive;
        chrome.storage.sync.set({ isActive: newState });
        updateUI(newState);
      });
    });
  
    function updateUI(isActive) {
      statusDiv.textContent = `Status: ${isActive ? 'Active' : 'Inactive'}`;
      toggleBtn.textContent = isActive ? 'Deactivate' : 'Activate';
    }
  });
chrome.runtime.sendMessage({action: "checkStatus"}, (response) => {
    if(response.isActive) {
      document.body.innerHTML = `
        <div class="block-message">
          <h1>🚫 Focus Mode Active 🚫</h1>
          <p>This site is blocked during work hours</p>
        </div>
      `;
    }
  });
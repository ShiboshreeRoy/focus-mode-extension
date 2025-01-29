const BLOCKED_SITES = {
    'default': [
      'youtube.com',
      'facebook.com',
      'twitter.com',
      'instagram.com',
      'reddit.com'
    ]
  };
  
  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ blockedSites: BLOCKED_SITES.default });
  });
  
  chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    chrome.storage.sync.get(['blockedSites', 'isActive'], (data) => {
      if(data.isActive) {
        const url = new URL(details.url);
        if(data.blockedSites.some(site => url.hostname.includes(site))) {
          chrome.tabs.update(details.tabId, {url: 'blocked.html'});
        }
      }
    });
  });
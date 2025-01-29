

## Focus Mode Pro 🚀
## Author: Shiboshree Roy
## Date: 2025-01-29
## Version: 1.0.0

A Chrome extension that helps you stay productive by blocking distracting websites during work hours. Take control of your browsing habits and boost your productivity!

![Extension Preview](../focus-mode-extension/images/Focus%20Mode%20Pro.png) *// Create a 'screenshots' folder and add images*

## Features ✨
- Block popular distracting websites by default
- Manual activation/deactivation toggle
- Customizable block list
- Visual blocking notification
- Scheduled blocking times (UI prepared - logic implementation in progress)
- Persistent storage of settings

## Installation ⚙️

### Load Unpacked Extension
1. Clone this repository:
   ```bash
   git clone  https://github.com/ShiboshreeRoy/focus-mode-extension.git
   ```
2. Open Chrome and navigate to:
   ```
   chrome://extensions/
   ```
3. Enable **Developer Mode** (toggle in top-right corner)
4. Click **Load unpacked** and select the extension folder

## Usage 🖱️

1. Click the extension icon in your Chrome toolbar
2. Toggle **Activate Focus Mode** to enable/disable blocking
3. Visit any blocked website to see the restriction in action

**Default Blocked Sites:**
- YouTube
- Facebook
- Twitter
- Instagram
- Reddit

## Configuration ⚙️

### Customize Blocked Websites
1. Edit `background.js`:
   ```javascript
   const BLOCKED_SITES = {
     'default': [
       'youtube.com',
       'add.your.website.here'
     ]
   };
   ```
2. Reload the extension in Chrome

### Set Working Hours (Coming Soon)
UI elements prepared in popup - implement your own schedule logic in `popup.js`

## Development 🛠️

### File Structure
```
focus-mode-extension/
├── manifest.json
├── background.js
├── content.js
├── styles.css
└── popup/
    ├── popup.html
    └── popup.js
```

### Key Components
- `manifest.json`: Extension metadata and permissions
- `background.js`: Main logic for site blocking
- `popup/`: User interface components
- `content.js`: Handles blocked page display

## Contributing 🤝

We welcome contributions! Here's how:
1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements 🙏
- Chrome Extension API
- Inspired by Freedom.to and StayFocusd
- Community contributors
```

---

**Future Enhancements Roadmap** 🚧  
- [ ] Time-based automatic activation
- [ ] Whitelist functionality
- [ ] Usage statistics dashboard
- [ ] Cross-device sync
- [ ] Password protection for settings

*Star the repo if you find this useful! ⭐*  
*Report issues [here](h https://github.com/ShiboshreeRoy/focus-mode-extension.git/issues)*
```

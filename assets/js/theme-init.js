// theme-init.js
// Applies the saved theme as early as possible so pages without the toggle
// will still render using the user's selection.
(function () {
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark' || theme === 'light') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  } catch (e) {
    // ignore storage access errors
  }
})();

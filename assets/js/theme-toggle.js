;(function () {
  var storageKey = 'site-theme'
  var mediaQuery = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

  function savedTheme() {
    try {
      var value = localStorage.getItem(storageKey)
      return value === 'light' || value === 'dark' ? value : 'auto'
    } catch (error) {
      return 'auto'
    }
  }

  function applyTheme(theme) {
    if (theme === 'auto') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', theme)
    }

    var widgets = document.querySelectorAll('paper-radar-widget')
    for (var i = 0; i < widgets.length; i += 1) {
      widgets[i].setAttribute('theme', theme)
    }

    var button = document.querySelector('.theme-toggle')
    if (button) {
      var effectiveTheme = theme === 'auto'
        ? (mediaQuery && mediaQuery.matches ? 'dark' : 'light')
        : theme
      var label = 'Current theme: ' + effectiveTheme + '. Click to switch to ' + (effectiveTheme === 'dark' ? 'light' : 'dark') + '.'
      button.setAttribute('aria-label', label)
      button.setAttribute('title', label)
      var icon = button.querySelector('i')
      if (icon) icon.className = effectiveTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'
    }
  }

  var currentTheme = savedTheme()

  function initializeThemeToggle() {
    applyTheme(currentTheme)
    var button = document.querySelector('.theme-toggle')
    if (!button) return

    button.addEventListener('click', function () {
      var currentlyDark = currentTheme === 'dark' ||
        (currentTheme === 'auto' && mediaQuery && mediaQuery.matches)
      currentTheme = currentlyDark ? 'light' : 'dark'
      try {
        localStorage.setItem(storageKey, currentTheme)
      } catch (error) {}
      applyTheme(currentTheme)
    })

    if (mediaQuery && mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', function () {
        if (currentTheme === 'auto') applyTheme(currentTheme)
      })
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeThemeToggle)
  } else {
    initializeThemeToggle()
  }
})()

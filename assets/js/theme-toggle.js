;(function () {
  var storageKey = 'site-theme'
  var themes = ['auto', 'light', 'dark']
  var icons = { auto: '◐', light: '☀', dark: '☾' }

  function savedTheme() {
    try {
      var value = localStorage.getItem(storageKey)
      return themes.indexOf(value) !== -1 ? value : 'auto'
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

    document.querySelectorAll('paper-radar-widget').forEach(function (widget) {
      widget.setAttribute('theme', theme)
    })

    var button = document.querySelector('.theme-toggle')
    if (button) {
      var label = 'Theme: ' + (theme === 'auto' ? 'automatic' : theme)
      button.setAttribute('aria-label', label)
      button.setAttribute('title', label + ' (click to change)')
      button.querySelector('span').textContent = icons[theme]
    }
  }

  var currentTheme = savedTheme()
  applyTheme(currentTheme)

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(currentTheme)
    var button = document.querySelector('.theme-toggle')
    if (!button) return

    button.addEventListener('click', function () {
      currentTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length]
      try {
        if (currentTheme === 'auto') localStorage.removeItem(storageKey)
        else localStorage.setItem(storageKey, currentTheme)
      } catch (error) {}
      applyTheme(currentTheme)
    })
  })
})()

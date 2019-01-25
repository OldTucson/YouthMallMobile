;(function () {
  function setFontSize() {
    var w = document.documentElement.clientWidth
    if (w > 640) {
      w = 640
    }
    document.documentElement.style.fontSize = w / 750 * 40 + 'px'
  }

  setFontSize()
  window.addEventListener('resize', function () {
    setFontSize()
  }, false)
})();
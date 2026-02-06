// Reflow all Plotly charts when the window resizes or orientation changes
function resizePlotly() {
  document.querySelectorAll('.js-plotly-plot').forEach(function (el) {
    if (window.Plotly) {
      Plotly.Plots.resize(el);
    }
  });
}

window.addEventListener('resize', resizePlotly);
window.addEventListener('orientationchange', function () {
  setTimeout(resizePlotly, 300);
});
window.addEventListener('load', function () {
  setTimeout(resizePlotly, 500);
});

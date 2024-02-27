// Jvascript
const scrollTimeline = new ScrollTimeline({
    scrollSource: document.scrollingElement,
    orientation: 'block',
    timeRange: 1,
});

document.styleSheets[0].insertRule(`@scroll-timeline scrollAnimation { source: ${scrollTimeline}; }`);

window.addEventListener('scroll', function() {
    updateProgressBar();
  });

  function updateProgressBar() {
    var progressBar = document.getElementById('progressBar');
    var totalHeight = document.body.scrollHeight - window.innerHeight;
    var progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = progress + '%';
  }
// Jvascript
const scrollTimeline = new ScrollTimeline({
    scrollSource: document.scrollingElement,
    orientation: 'block',
    timeRange: 1,
});

document.styleSheets[0].insertRule(`@scroll-timeline scrollAnimation { source: ${scrollTimeline}; }`);
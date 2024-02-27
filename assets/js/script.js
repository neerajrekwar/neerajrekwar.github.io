// Jvascript
function scrollHandler() {
    const image = document.querySelector('.image');
    const text = document.querySelector('.text');

    // Calculate the scroll percentage
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    // Apply transformations based on the scroll percentage
    image.style.transform = `translateY(${scrollPercentage}%)`;
    text.style.opacity = scrollPercentage / 100;
    text.style.transform = `translateY(${scrollPercentage / 2}px)`;

    // Add or remove a class to trigger additional styles if needed
    if (scrollPercentage > 50) {
        text.classList.add('visible');
    } else {
        text.classList.remove('visible');
    }
}
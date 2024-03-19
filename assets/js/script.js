// Jvascript
/* 

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
  
  */

  // scroll for updated on 2/28/2024 11:42PM
  // const header = document.querySelector("header");
  // const sectionOne = document.querySelector(".home-intro");

  const faders = document.querySelectorAll(".fade-in");
  const sliders = document.querySelectorAll(".slide-in");

  // const sectionOneOptions = {
  //   rootMargin: "-200px 0px 0px 0px"
  // };

  // const sectionOneObserver = new IntersectionObserver(function(
  //   entries,
  //   sectionOneObserver
  //  ) {
  //   entries.forEach(entry => {
  //     if (!entry.isIntersecting) {
  //      header.classList.add("nev-scrolled");
  //     } else {
  //       header.classList.remove("nav-scrolled")
  //     }
  //   });
  // },
  // sectionOneOptions);

  // sectionOneObserver.observe(sectionOne);

  const appearOptions = {
   threshold: 0,
   rootMargin: "0px 0px -100px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  sliders.forEach(silder => {
    appearOnScroll.observe(silder);
  });


  // Projects counters 

  const observerOptions = {
    threshold: 0.2 // Trigger when 20% of the element is visible
  };

  function animateNumbers(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target.querySelector('.number');
        const target = +counter.getAttribute('data-count');
        const duration = 2000; // Animation duration in milliseconds
        const updateSpeed = 120; // Update speed in milliseconds

        let count = 0;
        const increment = target / (duration / updateSpeed);

        const updateCount = () => {
          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, updateSpeed);
          } else {
            counter.innerText = target;
            observer.unobserve(entry.target);
          }
        };

        updateCount();
      }
    });
  }

  const observer = new IntersectionObserver(animateNumbers, observerOptions);
  document.querySelectorAll('.p-count').forEach(div => {
    observer.observe(div);
  });
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

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers(entry.target);
      }
    });
  }, options);

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  function animateNumbers(targetElement) {
    const counter = targetElement.querySelector('.number');
    const target = +counter.getAttribute('data-count');
    const duration = 2000; // Total animation duration
    const speed = 120; // Animation speed (milliseconds per frame)

    let count = 0;
    const increment = target / (duration / speed);

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  }

  window.addEventListener('load', () => {
    document.querySelectorAll('.section').forEach(section => {
      if (section.getBoundingClientRect().top < window.innerHeight) {
        animateNumbers(section);
      }
    });
  });
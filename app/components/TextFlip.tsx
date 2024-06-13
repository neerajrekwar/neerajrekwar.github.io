import { useEffect, useRef, useState } from 'react';

const TextFlip = ({ elementId }) => {
  const el = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    el.current = document.getElementById(elementId);
    console.log("Created new Flip");

    const nextButton = document.querySelector('.next');
    if (nextButton) {
      nextButton.addEventListener('click', next);
    }

    const intervalId = setInterval(next, 1500);

    return () => {
      if (nextButton) {
        nextButton.removeEventListener('click', next);
      }
      clearInterval(intervalId);
    };
  }, []);

  const next = (event) => {
    if (event) {
      event.preventDefault();
    }

    const nextStepNum = currentStep + 1;
    const currentStepEl = el.current.querySelector(`.step${currentStep}`);
    const nextStepEl = el.current.querySelector(`.step${nextStepNum}`);

    if (nextStepEl) {
      console.log('we found the next step', nextStepEl);

      currentStepEl.previousElementSibling?.classList.remove('down');

      currentStepEl.classList.remove('set');
      currentStepEl.classList.add('down');

      nextStepEl.classList.add('set');
      nextStepEl.classList.remove('down');

      nextStepEl.nextElementSibling?.classList.remove('down');

      setCurrentStep(currentStep + 1);
    } else {
      // reset to 0
      el.current.querySelectorAll(".step").forEach(step => step.classList.remove('set'));
      el.current.querySelector(`.step${currentStep}`)?.classList.add('down');
      el.current.querySelectorAll(`.step:not(.step${currentStep})`).forEach(step => step.classList.remove('down'));

      setCurrentStep(0);
      next();
    }
  };

  return null; // This component does not render anything itself
};

  return (
    <div>
      <div id="flipper">
        <div className="step0 set">Step 0</div>
        <div className="step1">Step 1</div>
        <div className="step2">Step 2</div>
        {/* Add more steps as needed */} 
      </div>
      <button className="next">Next</button>
      <Flip elementId="flipper" />
    </div>
  );


export default TextFlip;
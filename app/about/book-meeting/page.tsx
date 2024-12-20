import Image from "next/image"
import Link from 'next/link';
import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/neerajrekwar817/new-meeting"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};

export default CalendlyWidget;

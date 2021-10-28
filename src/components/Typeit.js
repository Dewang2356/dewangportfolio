import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function App() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {

      strings: ["Full Stack Developer", "Freelancer", "Front Developer","Web Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 900,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      
      {/* Element to display typing strings */}
      <span ref={el}></span>
    </div>
  );
}
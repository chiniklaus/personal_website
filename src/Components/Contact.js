import React, { useLayoutEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function Contact({ id }) {
  const [width, height] = useWindowSize();
  return (
    <div className="section border-top" style={{minHeight: height}}>
        <h1 id={id} className="text-center">Get in contact with me!</h1>
    </div>
  );
}

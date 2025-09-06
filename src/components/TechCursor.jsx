import { useEffect } from "react";

const TechCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.cssText = `
      width: 12px;
      height: 12px;
      background: #6ac1ff;
      border-radius: 50%;
      position: fixed;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
    `;

    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default TechCursor;
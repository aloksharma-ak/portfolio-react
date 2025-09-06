// Button.tsx
import React from "react";

// type ButtonProps = {
//   text: string,
//   className?: string,
//   id?: string,
//   href?: string,
//   ariaLabel?: string,
// };

const Button = ({ text, className = "", id, ariaLabel }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("counter");

        if (target && id) {
          const offset = window.innerHeight * 0.15;

          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      aria-label={ariaLabel ?? text}
      className={`cta-wrapper group ${className}`}
    >
      <div className="cta-button">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;

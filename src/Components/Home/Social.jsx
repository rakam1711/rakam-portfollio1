/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="mailto:rakamsingh1711@gmail.com"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-envelope"></i>
      </a>
      <a
        href="https://github.com/rakam1711"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/rakam-nagar-15666a212/"
        className="home_social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;

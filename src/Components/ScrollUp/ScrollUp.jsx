/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./ScrollUp.css"

const ScrollUp = () => {

    window.addEventListener("scroll", function (){
        const scrollUp = document.querySelector(".scrollup");
        if( this?.scrollY >= 560) {
            scrollUp.classList.add("show__scroll")
        } else {
            scrollUp.classList.remove("show__scroll");
        }
    })

  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup-icon"></i>
    </a>
  )
}

export default ScrollUp
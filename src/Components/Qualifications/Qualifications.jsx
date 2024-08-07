import React, { useState } from "react";
import "./Qualifications.css";

const Qualifications = () => {
  const [toggle, showToggle] = useState(2);
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => showToggle(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
            <div className="underline"></div>
          </div>

          <div
            className={
              toggle === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => showToggle(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Eduaction
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Master of Computer Application
                </h3>
                <span className="qualification__subtitle">
                  (8.5 GPA) - SRM University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">HSC (PCM) </h3>
                <span className="qualification__subtitle">
                  (81%) - Kendriya Vidyalaya
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2016 - 2018
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------- */}
          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Nodejs Developer</h3>
                <span className="qualification__subtitle">
                  Tekniko Global - Noida, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  full-stack Developer -Intern
                </h3>
                <span className="qualification__subtitle">
                  Cefnogi Solutions - Noida, India{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Jan/2024 - June/2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  full-stack Developer -Intern
                </h3>
                <span className="qualification__subtitle">
                  AScorp Technologies - Ghaziabad, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Jan/2023 - June/2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;

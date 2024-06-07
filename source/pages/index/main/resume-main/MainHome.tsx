import React from 'react';
import { useRef, useEffect, useState } from 'react';
interface HomeProps {}
function MainHome() {
  const jobTitle: Array<string> = ['Multimedia Programmer'];
  const profilePicture: string = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main/source/front-end/pages/index/%7Econtent/png-files/profile-picture.png`;
  return (
    <section id="main-home">
      <div className="margin-main">
        <aside id="home-cover">
          <header className="home-header">
            <h1 className="job-title" data-text={jobTitle[0]}>
              {jobTitle[0]}
            </h1>
            <h3>Development Portfolio</h3>
          </header>

          <menu className="home-buttons">
            <button className="my-career">
              <a>
                <h6>My Career</h6>
              </a>
            </button>
            <button className="my-projects">
              <a>
                <h6>My Projects</h6>
              </a>
            </button>
          </menu>

          <p className="home-description">
            As a full-stack developer, my focus is on building websites, animations, and applications designed to captivate
            users from the first click. By blending creativity with technical expertise, I aim to create standout projects
            that strive to make our lives easier. There's a genuine passion within me to experiment with new tools and stay
            updated with multimedia technologies, allowing me to bring fresh and innovative solutions to each project. I'm
            eager to collaborate with fellow creatives, employers, and enthusiasts to turn concepts into impactful, enduring
            applications. While lacking a traditional CS degree, my unique perspective undoubtedly adds value. I thrive in
            environments conducive to exploring new tools with clear goals, and my passion lies in partnering with visionary
            creatives to transform concepts into digital masterpieces. Through hands-on experience and a continuous learning
            journey, my arsenal of skills can deliver exceptional results to anyone seeking my services, whether permanent or
            contract-based.
          </p>
          <div className="mid-ground"></div>
        </aside>

        <aside id="home-profile">
          <img src={profilePicture} alt="Profile Picture" />
        </aside>
      </div>
    </section>
  );
}
export default MainHome;

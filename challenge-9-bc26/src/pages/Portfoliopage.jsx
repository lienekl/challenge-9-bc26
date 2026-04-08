
import React from 'react';
import challenge1Img from '../assets/challenge1.png';

const PortfolioPage = () => {
  return (
    <div className="galleryContainer">
      <div className="galleryHeading">
      <h2>Portfolio Gallery</h2>
      <p>Bellow are all project that I worked on during Full Stack Web Development Bootcamp.</p>
      </div>



      <div className="tile">
        <h3>My Personal Portfolio Web Page</h3>
        <div>
        <a href={challenge1Img} target="_blank" rel="noreferrer">
        <img src={challenge1Img} className="tileImg" alt="Challenge 1" />
        </a>
        </div>
        <a href="https://github.com/lienekl/challenges-bc26.git" className="links">To Github</a><br></br><a href="https://lienekl.github.io/challenges-bc26/" className="links">Live Preview</a>
      </div>
    </div>
  );
};

export default PortfolioPage;

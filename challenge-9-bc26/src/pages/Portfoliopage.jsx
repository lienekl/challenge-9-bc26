
import React from 'react';
import challenge1Img from '../assets/challenge1.png';
import challenge2Img from '../assets/challenge2.png';
import challenge3Img from '../assets/challenge3.png';
import challenge4Img from '../assets/challenge4.png';
import challenge5Img from '../assets/challenge5.png';
import challenge6Img from '../assets/challenge6.png';
import challenge7Img from '../assets/challenge7.png';
import challenge8Img from '../assets/challenge8.png';

const PortfolioPage = () => {
  return (
    <div className="galleryContainer">
      <div className="galleryHeading">
        <h2>Portfolio Gallery</h2>
        <p>Below are the core projects from my Full Stack Bootcamp. These challenges track my progress from building basic layouts to developing functional, responsive web applications.</p>
      </div>


      <section className="portfolio-container">

        <div className="tile">
          <h3>My Personal Portfolio Web Page</h3>
          <div>

            <a href={challenge1Img} target="_blank" rel="noreferrer">
              <img src={challenge1Img} className="tileImg" alt="Challenge 1" />
            </a>
          </div>
          <a href="https://github.com/lienekl/challenges-bc26.git" className="links">To Github</a><br></br><a href="https://lienekl.github.io/challenges-bc26/" className="links">Live Preview</a>
        </div>

        <div className="tile">
          <h3>Multi-page Responsive Website</h3>
          <div>

            <a href={challenge2Img} target="_blank" rel="noreferrer">
              <img src={challenge2Img} className="tileImg" alt="Challenge 2" />
            </a>
          </div>
          <a href="https://github.com/lienekl/challenge-2-bc26.git" className="links">To Github</a><br></br><a href="https://lienekl.github.io/challenge-2-bc26/" className="links">Live Preview</a>
        </div>

        <div className="tile">
          <h3>Migrating a Site to Bootstrap</h3>
          <div>

            <a href={challenge3Img} target="_blank" rel="noreferrer">
              <img src={challenge3Img} className="tileImg" alt="Challenge 2" />
            </a>
          </div>
          <a href="https://github.com/lienekl/challenge-3-bc26.git" className="links">To Github</a><br></br><a href="https://lienekl.github.io/challenge-3-bc26/" className="links">Live Preview</a>
        </div>

        <div className="tile">
          <h3>The Interactive TODO List</h3>
          <div>

            <a href={challenge4Img} target="_blank" rel="noreferrer">
              <img src={challenge4Img} className="tileImg" alt="Challenge 2" />
            </a>
          </div>
          <a href="https://github.com/lienekl/challenge-4-bc26.git" className="links">To Github</a><br></br><a href="https://lienekl.github.io/challenge-4-bc26/" className="links">Live Preview</a>
        </div>

        <div className="tile">
          <h3>An Interactive Web Application using a 3rd Party API</h3>
          <div>

            <a href={challenge5Img} target="_blank" rel="noreferrer">
              <img src={challenge5Img} className="tileImg" alt="Challenge 2" />
            </a>
          </div>
          <a href="https://github.com/lienekl/challenge-5-group-work.git" className="links">To Github</a><br></br><a href="https://lienekl.github.io/challenge-5-group-work/" className="links">Live Preview</a>
        </div>

         <div className="tile">
          <h3>Python README File Generator.</h3>
          <div>

            <a href={challenge6Img} target="_blank" rel="noreferrer">
              <img src={challenge6Img} className="tileImg" alt="Challenge 2" />
            </a>
          </div>
          <a href="https://github.com/lienekl/challenge-6-bc26.git" className="links">To Github</a>
        </div>

        <div className="tile">
          <h3>Full-Stack Note-Taking Application.</h3>
          <div>

            <a href={challenge7Img} target="_blank" rel="noreferrer">
              <img src={challenge7Img} className="tileImg" alt="Challenge 2" />
            </a>
          </div>
          <a href="https://github.com/lienekl/challenge-7-bc26.git" className="links">To Github</a><br></br><a href="https://challenge-7-bc26.onrender.com" className="links">Live Preview</a>
        </div>

         <div className="tile">
          <h3>Full Stack Cooking Blog Application</h3>
          <div>

            <a href={challenge8Img} target="_blank" rel="noreferrer">
              <img src={challenge8Img} className="tileImg" alt="Challenge 2" />
            </a>
          </div>
          <a href="https://github.com/lienekl/challenge-8-bc26.git" className="links">To Github</a><br></br><a href="https://www.loom.com/share/b8041a207d6b423dbef83349fced3c85" className="links">Live Preview</a>
        </div>

      </section>
    </div>



  );
};

export default PortfolioPage;

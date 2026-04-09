// HomePage.js
import React from 'react';
import profileImg from '../assets/profile-picture.png';

const HomePage = () => {
  return (
    <>
    <div>
    <div className="homepage">
      <h2>About Me</h2>
      </div>
     <div className="containerHp">
      <img src={profileImg} className="profileImg" /> 
      <p>My name is Liene Klavina and I am an online marketing professional transitioning into front-end development. Over a 15-year career in online marketing, I progressed through roles in account management, email development, design, and campaign management, building strong analytical skills, attention to detail, and a passion for creating effective digital experiences.</p>
    </div>
    </div>
    </>
  );
};

export default HomePage;

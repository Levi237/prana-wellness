import React from 'react';


const HomeHeader = ({toggleContactBtn}) => {

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  
  return(
    <>
      <div className="video-container">
        <video
          playsInline
          autoPlay
          muted
          loop
          id="bgvid"
          ref={video => {
              if (!video) return;
              video.muted = true;
              video.play();
          }}
        >
        <source
            src="https://player.vimeo.com/external/395830932.hd.mp4?s=d355e4cba477d5307c66b116a78ba687d56f5b7e&profile_id=174"
            type="video/mp4"
        />
        </video>
      </div>

      <div className="home-header">
        <section className="welcomeText">WELCOME TO</section>
        <section className="pranaText">PRANA</section>
        <section className="wellnessText">wellness</section>
        <section className="statementText">Wellness designed to work for you.</section>
        <button name="contactForm" className="ctaBtn mobile-fill" onClick={(e) => {toggleContactBtn(e)}}>Bring Prana to Your Workplace</button>
      </div>
      
    </>)
    ;
};

export default HomeHeader;
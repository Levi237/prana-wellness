import React from 'react';

 const HomeHeader = ({toggleContactBtn}) => {
    return(<>
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
                  src="https://player.vimeo.com/video/395827361"
                  type="video/mp4"
              />
          </video>

          <div className="home-header">
            <section className="welcomeText">WELCOME TO</section>
            <section className="pranaText">PRANA</section>
            <section className="wellnessText">wellness</section>
            <section className="statementText">Wellness designed to work for you.</section>
            <br/><br/>
            <button name="contactForm" className="ctaBtn mobile-fill" onClick={(e) => {toggleContactBtn(e)}}>Bring Prana to Your Workplace</button>
          </div>
    </>);
};

export default HomeHeader;
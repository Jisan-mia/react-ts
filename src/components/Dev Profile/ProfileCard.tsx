import React from 'react'

const ProfileCard = () => {
  return (
    <>
     <section id="userProfile">
        <div className="profile-info demo">
          <div className="demo-profile">Demo</div>
          <div className="avater">
            <div className="demoImg"></div>
          </div>
          <div className="info">
            <h2 id="profileName">Jisan</h2>
            <h3 id="profileTitle">Frontend Developer</h3>
            <p id="profileDescription">
              Enthusiastic and passionate Front-end Web Developer, who enjoys
              coding.
            </p>
          </div>
        </div>
      </section> 
    </>
  )
}

export default ProfileCard

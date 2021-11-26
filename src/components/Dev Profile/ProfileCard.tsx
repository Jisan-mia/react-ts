import React from 'react'
import {IDevProfileState, devProfileType} from './DevProfile'



interface IProps {
  profile: devProfileType
  setDevProfile: React.Dispatch<React.SetStateAction<IDevProfileState['devProfile']>>
}

const ProfileCard: React.FC<IProps> = ({profile, setDevProfile}) => {
  return (
    <>
     <section id="userProfile">
        <div className="profile-info demo">
          <div className="demo-profile">Demo</div>
          <div className="avater">
            <img src={profile.url} alt="" />
          </div>
          <div className="info">
            <h2 id="profileName">{profile.name}</h2>
            <h3 id="profileTitle">{profile.title}</h3>
            <p id="profileDescription">
             {profile.description}
            </p>
          </div>
        </div>
      </section> 
    </>
  )
}

export default ProfileCard

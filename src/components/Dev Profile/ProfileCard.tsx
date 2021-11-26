import React from 'react'
import {IDevProfileState, devProfileType} from './DevProfile';
import {BsPersonX} from 'react-icons/bs'



interface IProps {
  allProfile: IDevProfileState['devProfile']
  profile: devProfileType
  setDevProfile: React.Dispatch<React.SetStateAction<IDevProfileState['devProfile']>>
}

const ProfileCard: React.FC<IProps> = ({allProfile, profile, setDevProfile}) => {

  const handleDeleteProfile = (id: number | string) => {
    const remainingProfile = allProfile.filter(profile => profile.id !== id);
    setDevProfile(remainingProfile)
  }

  return (
    <>
     <section id="userProfile">
        <div className="profile-info demo">
          {profile.isDemo && <div className="demo-profile">Demo</div>}
          
          <div className="avater">
            <img src={profile.url} alt="Profile Picture" />
          </div>
          <div className="info">
            {
              !profile.isDemo ? (
                <div className="profileName-flexbox">
                  <h2 id="profileName">{profile.name}</h2>
                  <div className="edit-delete-icon"> 
                    {/* <i className="fas fa-user-edit" onclick="editProfile(this)"></i>  */}
                      <BsPersonX 
                        size={24} 
                        fill={'rgba(0, 0, 0, 0.8)'}
                        className="action-icon"
                        onClick={() => handleDeleteProfile(profile.id)}
                      />
                  </div>
                </div>
              )
              : ( <h2 id="profileName">{profile.name}</h2>)
            }
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

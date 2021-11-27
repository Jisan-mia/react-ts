import React from 'react'
import {IDevProfileState, devProfileType} from './DevProfile';
import {BsPersonX} from 'react-icons/bs'
import {FaUserEdit} from 'react-icons/fa'


interface IProps {
  allProfile: IDevProfileState['devProfile']
  profile: devProfileType
  setDevProfile: React.Dispatch<React.SetStateAction<IDevProfileState['devProfile']>>
  handleEditProfile: (profile: devProfileType) => void
}

const ProfileCard: React.FC<IProps> = ({allProfile, profile, setDevProfile, handleEditProfile}) => {

  const handleDeleteProfile = (id: number | string) => {
    const remainingProfile = allProfile.filter(profile => profile.id !== id);
    setDevProfile(remainingProfile)
  }

 

  function checkURL(url: string):boolean {
    return url.includes('https' || 'image' || 'png' || 'jpg' || 'svg') 
  }

  return (
    <>
     <section id="userProfile">
        <div className="profile-info demo">
          {profile.isDemo && <div className="demo-profile">Demo</div>}
          
          <div className="avater">
            <img src={checkURL(profile.url) ? profile.url : '/avater.svg'} alt="Profile Picture" />
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
                      <FaUserEdit 
                        size={24} 
                        fill={'rgba(0, 0, 0, 0.8)'}
                        className="action-icon"
                        onClick={() => handleEditProfile(profile)}
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

import React, { useState } from 'react'
import ProfileForm from './ProfileForm';
import ProfileCard from './ProfileCard'
import './DevProfile.css';

export type devProfileType = {
  id: number | string
  name: string
  title: string
  description: string
  url: string
  isDemo?: boolean
}
export interface IDevProfileState {
  devProfile: devProfileType[]
}



const DevProfile = () => {
  const [devProfile, setDevProfile] = useState<IDevProfileState['devProfile']>([{
    id: 1,
    name: 'Jisan',
    title: 'Frontend Developer',
    description: 'Enthusiastic and passionate Front-end Web Developer, who enjoys coding.',
    url: 'https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/118452463_760601168074695_8075328025596312110_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeERg2kjn3m_2XpMpBEFhnnV_fxsvySInPX9_Gy_JIic9foWZFJF3ZFV4F4qm_0y5OZgzmp7OVvpTHOgN8OgIOp9&_nc_ohc=1Z7i08V6PUoAX9FDB3H&_nc_ht=scontent.fdac116-1.fna&oh=53d6e4aad87d5c920d60635aa3ad83cf&oe=61C450E3',
    isDemo: true
  }])

  return (
    <main>
      <ProfileForm devProfile={devProfile} setDevProfile={setDevProfile} />
      <div className="dev-profiles">
      {
        devProfile.map(profile => <ProfileCard allProfile={devProfile} profile={profile} setDevProfile={setDevProfile}/>)
      }
      </div>
      
    </main>
  )
}

export default DevProfile

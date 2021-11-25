import { useState } from "react"
import PeopleList from './PeopleList'
import './InviteApp.css'
import AddPeople from './AddPeople'
export interface IInvitedPeopleState {
  invitedPeople: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

const InviteApp = () => {

  const [invitedPeople, setInvitedPeople] = useState<IInvitedPeopleState['invitedPeople']>([
    {
      name: 'Masrafee',
      age: 39,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Mashrafe_Bin_Mortaza_%28cropped%29.jpg/260px-Mashrafe_Bin_Mortaza_%28cropped%29.jpg',
      note: 'Lorem ipsum sdf sfdor sit amet.'
    }
  ])

  return (
    <>
    <h1>Invite People App</h1>
    <div className="invite-container">
      <AddPeople invitedPeople={invitedPeople} setInvitedPeople={setInvitedPeople} />
      <PeopleList invitedPeople={invitedPeople} />
    </div>
    </>
  )
}

export default InviteApp

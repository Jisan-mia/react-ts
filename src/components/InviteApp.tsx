import { useState } from "react"

interface IInvitedPeopleState {
  invitedPeople: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

const InviteApp = () => {

  const [invitedPeople, setInvitedPeople] = useState<IInvitedPeopleState['invitedPeople']>([])

  invitedPeople.map((people) => {
    people.name = '5s'
  })

  return (
    <div>
      <h1>This is invite app</h1>
    </div>
  )
}

export default InviteApp

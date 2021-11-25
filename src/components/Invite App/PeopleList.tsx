import React from 'react'
import './PeopleList.css'
interface IProps {
  invitedPeople: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

// handling props
const PeopleList: React.FC<IProps> = ({invitedPeople}) => {

  //handling functions
  const renderList = ():JSX.Element[] => {
    return invitedPeople.map(person => (
      <li className='list-item'>
        <div className="list-content1">
          <img src={person.url} alt="" />
          <h2>{person.name}</h2>
        </div>
        <div className="list-content2">{person.age} years old</div>
        <div className="list-content3">{person.note}</div>
      </li>
    ))
  }
  
  return (
    <ul className="list-container">
      {renderList()}
    </ul>
  )
}

export default PeopleList

import React, { useState } from 'react';
import './AddPeople.css'

import { IInvitedPeopleState as Props } from './InviteApp'

export interface IInvitedPeopleState {
  invitedPeople: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

interface IProps {
  invitedPeople: Props['invitedPeople']
  setInvitedPeople: React.Dispatch<React.SetStateAction<Props['invitedPeople']>>
}

const AddPeople:React.FC<IProps> = ({invitedPeople, setInvitedPeople}) => {

  const [formData, setFormData] = useState({
    name: '',
    url: '',
    age: '',
    note: ''
  })
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ): void => {
    const {value, name} = e.target;
    setFormData({
      ...formData,
      [name]: value
      
    })
  }

  const handleAddPeople = (e: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
    e.preventDefault();
    if(!formData.name || !formData.url || !formData.age) {
      return;
    } 

    setInvitedPeople([
      ...invitedPeople,
      {
        name: formData.name,
        url: formData.url,
        age: parseInt(formData.age),
        note: formData.note
      }
    ])

    setFormData({
      name: '',
      url: '',
      age: '',
      note: ''
    })

  }
  return (
    <div className="main-cont">
      <form className="form">
        <input 
          onChange={(e) => handleOnChange(e)} 
          name="url" value={formData.url} 
          className='input' 
          placeholder='Image Url' 
          type="text" 
        />
        <input 
          onChange={(e) => handleOnChange(e)} 
          name="name" value={formData.name} 
          className='input' 
          placeholder='Name' 
          type="text"
          required
        />
        <input 
          onChange={(e) => handleOnChange(e)} 
          name="age" value={formData.age} 
          className='input'  
          placeholder='Age' 
          type="number" 
          required
        />
        <textarea 
          onChange={(e) => handleOnChange(e)} 
          name="note" 
          value={formData.note} 
          className='input' 
          placeholder='Note'  
        />
        <input onClick={handleAddPeople} className='btn' type="submit" value="Add People" />
      </form>
      
    </div>
  )
}

export default AddPeople;
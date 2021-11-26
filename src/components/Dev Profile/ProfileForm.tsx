import React, { useState } from 'react'
import {devProfileType} from './DevProfile'
interface IProps {
	devProfile: devProfileType[]
	setDevProfile: React.Dispatch<React.SetStateAction<devProfileType[]>>
}

const ProfileForm: React.FC<IProps> = ({devProfile, setDevProfile}) => {
	const [profileInputState, setProfileInputState] = useState<devProfileType>({
		name: '',
		title: '',
		description: '',
		url: '',
	})
	const handleAddProfile = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const {name, title, description, url} = profileInputState
		if(!name || !title || !description || !url) {
			alert('Please fill the form first')
			return
		} 
		setDevProfile([
			...devProfile,
			profileInputState
		])
		
		setProfileInputState({
			name: '',
			title: '',
			description: '',
			url: '',
		})

	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ): void => {
		const {name, value} = e.target;
		setProfileInputState({
			...profileInputState,
			[name]: value
		})
	}

  return (
    <>
     <form id="profileForm" onSubmit={handleAddProfile}>
			<h2 className="form-header">Profile Info</h2>
			<input
				onChange={e => handleInputChange(e)} 
				id="inputName" 
				placeholder="Name"  
				type="text" 
				name="name" 
				value={profileInputState.name}/>
			<input
				onChange={e => handleInputChange(e)} 
				id="inputTitle" 
				placeholder="Title" 
				type="text" 
				name="title" 
				value={profileInputState.title}/>
			<textarea
				onChange={e => handleInputChange(e)}
				name="description"
				id="inputDescription"
				// cols=""
				placeholder="Description"
				// rows=""
				value={profileInputState.description}
			></textarea>
			{/* <input
				onChange={e => handleInputChange(e)}
				type="file"
				className="custom-file-input"
				name="url"
				id="inputAvater"
				accept="image/png, image/jpeg"
				// onChange="getAvaterSrc(event)"
				value={profileInputState.url}
			/> */}
			<input
				onChange={e => handleInputChange(e)}
				name="url"
				id="inputAvater"
				placeholder="Image url"
				value={profileInputState.url}
			/>
			<input 
				type="submit" 
				className="btn" 
				value="Add Profile" 
			/>
		</form> 
    </>
  )
}

export default ProfileForm

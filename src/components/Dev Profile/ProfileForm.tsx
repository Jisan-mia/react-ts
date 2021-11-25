import React from 'react'

const ProfileForm = () => {
  return (
    <>
     <form id="profileForm">
			<h2 className="form-header">Profile Info</h2>
			<input id="inputName" placeholder="Name"  type="text" />
			<input id="inputTitle" placeholder="Title" type="text" />
			<textarea
				name="description"
				id="inputDescription"
				// cols=""
				placeholder="Description"
				// rows=""
			></textarea>
			<input
				type="file"
				className="custom-file-input"
				name="avater"
				id="inputAvater"
				accept="image/png, image/jpeg"
				// onChange="getAvaterSrc(event)"
			/>
			<input type="submit" className="btn" value="Add Profile" />
		</form> 
    </>
  )
}

export default ProfileForm

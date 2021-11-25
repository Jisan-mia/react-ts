import React from 'react'
import './DevProfile.css'

const DevProfile = () => {
  return (
    <main>
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
		<section id="userProfile">
			<div className="profile-info demo">
				<div className="demo-profile">Demo</div>
				<div className="avater">
					<img id="profileImg" src="img/avater.svg" alt="avater" />
				</div>
				<div className="info">
					<h2 id="profileName">Jisan</h2>
					<h3 id="profileTitle">Frontend Developer</h3>
					<p id="profileDescription">
						Enthusiastic and passionate Front-end Web Developer, who enjoys
						coding.
					</p>
				</div>
			</div>
		</section>

      </main>
  )
}

export default DevProfile

import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()  
  return (
  <div>
    <h1>Profile</h1>
    <button type='button' onClick={()=>navigate(-1)}>Go back</button>
  </div>
  
  )
}

export default Profile;
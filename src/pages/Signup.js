import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BottomText from '../components/BottomText'


export default function Signup() {


  const [profile, changeProfile] = useState('');
  const [usernameval, changeUsername] = useState('');
  const [passwordval, changePassword] = useState('');


  function changeProfilePic(e) {
    changeProfile(e.target.value);
  }

  function changeUsernameField(e) {
    changeUsername(e.target.value);
  }

  function changePasswordField(e) {
    changePassword(e.target.value);
  }

  
  async function signUp(e) {
  
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pfp: profile, username: usernameval, password: passwordval })
    }
    const response = await fetch('/api/signup', request)
    const data = await response.json();
  
  }

  return (
    <div className='user__Container'>
      <h1 className='text__pfp'>Profile Picture</h1>
      <input className='input__form' type='text' onChange={changeProfilePic} />
      <h1 className='text__user'>Username</h1>
      <input className='input__form' type='text' onChange={changeUsernameField} />
      <h1 className='text__password'>Password</h1>
      <input className='input__form' type='text' onChange={changePasswordField} />
      <Link to={'/success'}>
        <button className='button__submit' onClick={signUp} >Sign up</button>
      </Link>
      <BottomText />
    </div>
  )
}

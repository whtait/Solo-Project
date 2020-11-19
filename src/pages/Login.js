import React from 'react'
import { Link } from 'react-router-dom'
import BottomTextLogin from '../components/BottomTextLogin'

export default function Signup() {
  return (
    <div className='user__Container'>
      <h1 className='text__user'>Username</h1>
      <input className='input__form' type='text' value=''/>
      <h1 className='text__password'>Password</h1>
      <input className='input__form' type='text' value=''/>
      <Link to={'/success'}>
      <button className='button__submit'>Log in</button>
      </Link>
      <BottomTextLogin />
    </div>
  )
}

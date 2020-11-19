import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomTextLogin() {
  return (
    <span className='bottom__text'>
    Need an account? 
    <Link to={'/'}>
      <button className='bottom__text-btn'>Sign up</button>
    </Link>
  </span>
  )
}

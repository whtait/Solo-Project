import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomText() {
  return (
    <span className='bottom__text'>
      Have an account? 
      <Link to={'/login'}>
        <button className='bottom__text-btn'>Sign in</button>
      </Link>
    </span>
  )
}

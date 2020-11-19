import React from 'react';
import { Link } from 'react-router-dom'

export default function LoginBtn() {
  return (
    <Link to={'/success'}>
      <button className='button__submit'>Log in</button>
    </Link>
  )
}


import React from 'react';
import { Link } from 'react-router-dom'

export default function SignupBtn() {
  return (
    <Link to={'/success'}>
      <button className='button__submit'>Sign up</button>
    </Link>
  )
}

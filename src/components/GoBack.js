import React from 'react'
import { Link } from 'react-router-dom'

export default function GoBack() {
  return (
    <Link to={'/'}>
      <button className='button' >Go back</button>
    </Link>
  )
}

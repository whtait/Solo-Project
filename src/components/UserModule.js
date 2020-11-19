import React from 'react'
import Delete from './Delete'

export default function UserModule({ pfp, username, password }) {
  return (
    <div className='default'>
      <img className='userImage' src={pfp} />
      <p className='noPad' ><strong>Username:</strong> {username}</p>
      <p className='noPad' ><strong>Password:</strong> {password}</p>
      {/* <Delete username={username}/> */}
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import UserModule from '../components/UserModule';
import GoBack from '../components/GoBack'
import '../css/success.css';

export default function Success() {
  const [state, setState] = useState({ data: [] });

  useEffect(async () => {
    const response = await fetch('/api/success');
    const json = await response.json();
    setState({ data: json })
  }, []);

  const moduleArr = [];
  for (let i = 0; i < state.data.length; i++) {
    moduleArr.push(<UserModule key={state.data[i]._id} pfp={state.data[i].pfp} username={state.data[i].username} password={state.data[i].password}/>)
  }

  return (
    <div>
      <div className='grid-container'>
        {moduleArr}
      </div>
      <center>
        <GoBack />
      </center>
    </div>
  )
}



import React from 'react'
import { useParams } from 'react-router-dom'; 

function User() {
    const { Userid } = useParams();
  return (
    <div className='bg-orange-100 text-center text-black text-5xl font-bold p-6'>
      User:{Userid}
    </div>
  )
}

export default User

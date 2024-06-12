import React from 'react'
import { BsStars } from 'react-icons/bs'

const Badge = ({title,icon}) => {
  return (
    <div className='flex items-center justify-center border px-1 py-[.2] rounded-md border-black'>
          {icon}
          &nbsp;&nbsp;
          <p className='text-xs'>{title}</p>
          </div>
  )
}

export default Badge
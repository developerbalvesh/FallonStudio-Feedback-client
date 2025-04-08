import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='h-[100svh] flex items-center justify-center flex-col gap-3'>
      <h1 className='text-xl'>Page Not Found !</h1>
      <Link to={"/"}>
      <button className='bg-blue-950 text-white px-10 py-2'>Home</button>
      </Link>
    </div>
  )
}

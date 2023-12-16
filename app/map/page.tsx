"use client"
import dynamic from 'next/dynamic';
import React from 'react'
const Map = dynamic(() => import('./map'), {
    ssr: false,
  });

function page() {
    
  return (
    <div   className=' '>

<Map />

    </div>
  )
}

export default page
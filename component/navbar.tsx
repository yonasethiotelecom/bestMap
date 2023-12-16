import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function navbar() {
  return (
    <div className=' sticky top-0 z-50   flex  justify-between  items-center   w-full'  style={{backgroundColor:'#FFFFFF'}}>
        
        <div  style={{  margin: '10px', padding: '10px' }} >
        <Link href="/">
            <Image src='/photoDagm3.png' alt='5G' width={163} height={42} />
            </Link>
        </div>

        <div style={{ color: '#8DC63F', margin: '10px', textAlign: 'center' }}>
    <h1 style={{ fontWeight: 'bold', fontSize: '1.+5rem', whiteSpace: 'nowrap' }}>Check 5G coverage</h1>
    <h2 style={{ fontSize: '1rem' }}>Our 5G coverage is rapidly expanding, bringing lightning-fast speeds to every corner of the nation!</h2>
</div>
       
        
   
         </div>
  )
}

export default navbar
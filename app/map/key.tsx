import React from 'react'
import Image from 'next/image'

function key() {
  return (
    <div style={{ color: '#8DC63F'}} className=' z-50 fixed  bottom-0 w-full flex justify-between items-center  bg-white bg-opacity-50 p-2 '>
         <div className='flex space-x-2'>
      
        <div className='  rounded-full w-6 h-6'  style={{ backgroundColor: 'rgba(135,206 , 255, 0.2)'}}></div>
        <div> Coverage </div> 
        <div>
          <div  className='flex space-x-2'>
            <div>
          <Image src='/5G Logo.png' alt='image' width={30}  height={30}/>
          </div>
          <div> 5G Network </div> 
          </div>
          
        </div>
        </div>
        <div></div>
        </div>
  )
}
 
export default key
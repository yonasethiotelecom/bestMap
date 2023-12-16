"use client"
import React from 'react';

const Footer: React.FC = () => {

  return (
    <footer className=" z-50 flex  flex-col justify-center items-center m-auto  py-4 fixed bottom-0 w-full ">
      <div style={{color:'#FFF9E5'}}>

        
       <span className='mr-2   '>© Copyright 2023 to 2026 </span> 
        <a   href="https://www.ethiotelecom.et" target="_blank" rel="noreferrer noopener">
         Ethiotelecom
        </a>
        All Right Reserved
      </div>
      <div className='my-2'>
        <ul className='flex justify-center  items-center space-x-6 mt-6'>
          <li>
            <a
              href="https://www.facebook.com/ethiotelecom/"
              title="Facebook"
              target="_blank"
              rel="noreferrer noopener"
              style={{ color: 'rgb(59, 89, 153)' }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                role="img"
                viewBox="0 0 24 24"
                height="1.25em"
                width="1.25em"
                xmlns="http://www.w3.org/2000/svg"
                className=' delay-150  hover:h-[3em] hover:w-[3em]'
              >
          <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ethiotelecom"
              title="Twitter"
              target="_blank"
              rel="noreferrer noopener"
              style={{ color: 'rgb(85, 172, 238)' }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1.25em"
                width="1.25em"
                xmlns="http://www.w3.org/2000/svg"
                className=' delay-150  hover:h-[3em] hover:w-[3em]'
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://t.me/ethio_telecom"
              title="Telegram"
              target="_blank"
              rel="noreferrer noopener"
              style={{ color: 'rgb(0, 136, 204)' }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1.25em"
                width="1.25em"
                xmlns="http://www.w3.org/2000/svg"
                className=' delay-150  hover:h-[3em] hover:w-[3em]'
              >
               <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCW4ZjqFCCFukY94tZO0O5FA"
              title="Youtube"
              target="_blank"
              rel="noreferrer noopener"
              style={{ color: 'rgb(205, 32, 31)' }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 576 512"
                height="1.25em"
                width="1.25em"
                xmlns="http://www.w3.org/2000/svg"
                className=' delay-150  hover:h-[3em] hover:w-[3em]'
              >
             <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/ethio-telecom/"
              title="Linkedin"
              target="_blank"
              rel="noreferrer noopener"
              style={{ color: 'rgb(0, 119, 181)' }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1.25em"
                width="1.25em"
                xmlns="http://www.w3.org/2000/svg"
                className=' delay-150  hover:h-[3em] hover:w-[3em]'
              >
               <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ethiotelecom/?hl=en"
              title="Instagram"
              target="_blank"
              rel="noreferrer noopener"
              style={{ color: 'rgb(228, 64, 95)' }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1.25em"
                width="1.25em"
                xmlns="http://www.w3.org/2000/svg"
                className=' delay-150  hover:h-[3em] hover:w-[3em]'
              >
             <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

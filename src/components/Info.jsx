import React from 'react'
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

function Info() {
  return (
    <div>
        <img className="header-img" src='./src/assets/LinkedIn.jpg'/>

        <div className='navigation-info'>
          <div className='navigation-name'>
            Dylan Silva
          </div>
          <div className='navigation-title'>
            Software Engineer
          </div>
        </div>
        <div className='links'>
          <a href='https://www.linkedin.com/in/dylan-silva-cpsc/'>
            <button className="navigation-btn">
              Email <MdEmail className='navigation-logo'/>
            </button>
          </a>
          <a href='https://dylansilva-portfolio.vercel.app/'>
            <button className="navigation-btn">
              Website <CgWebsite className='navigation-logo'/>
            </button>
          </a>
        </div>
    </div>
  )
}

export default Info
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
        <div className='icons'>
            <a href='https://www.linkedin.com/in/dylan-silva-cpsc/'>
            <button className="footer-btn">
                <FaLinkedin className="icon-btn" />
            </button>
            </a>
            <a href='https://github.com/Dylbobin'>
            <button className="footer-btn">
                <FaGithubSquare className="icon-btn" />
            </button>
            </a>
        </div>
    </>
  )
}

export default Footer
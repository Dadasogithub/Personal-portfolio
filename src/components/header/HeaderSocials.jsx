import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
       <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
       <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><AiFillFacebook/></a>
       <a href="https://github.com" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
       
    </div>
  )
}

export default HeaderSocials
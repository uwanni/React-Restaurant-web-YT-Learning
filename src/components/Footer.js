import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon /> <FacebookIcon /> <TwitterIcon /> <LinkedInIcon /> 
      </div>
      <p> &copy; 2023 pedrotechpizza.com</p>
    </div>
  )
}

export default Footer

import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Facebook from '@mui/icons-material/Facebook'
import Linkedin from '@mui/icons-material/LinkedIn'
import '../styles/footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <InstagramIcon/><Twitter/><Facebook/><Linkedin/>
        </div>
        <p>&copy; 2022 SOL.com</p>
    </div>
  )
}

export default Footer
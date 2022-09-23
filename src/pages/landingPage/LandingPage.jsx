// packages
import React from 'react'

// styling
import './LandingPage.scss'

// assets
import landingImage from '../../assets/Landing page image.svg'


const LandingPage = () => {
  return (
    <div className='LandingPage'>
        <h1>Imagine if </h1>
        <h1>Snapchat</h1>
        <h1>had events</h1>
        <p>Easily host and share events with your friends across any social media.</p>
        <img src={landingImage} />
        <button>🎉 Create my event</button>
    </div>
  )
}

export default LandingPage
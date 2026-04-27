import simpleLogo from './assets/simple-logo.png'
import * as Constants from './Constants.ts'
import './App.css'
import Home from './pages/home/Home.tsx'
import { Images } from './pages/home/ImageImporter.ts'

function App() {
  function renderLinkIcon(link : string, imageSource : string) {
    return <>
      <a href={link} target='_blank'>
        <img className='icon' src={imageSource} />
      </a>
    </>
  }

  return (
    <>
      <title>{Constants.FIRST_NAME}'s Portfolio</title>
      <div className='header'>
        <img src={simpleLogo} className='header-logo' alt={`${Constants.FULL_NAME} Logo`}></img>
        <div className='headerText'>Home</div>
        <div className='headerText'>Contact Me</div>
        {/* TODO: Make these nav links */}
      </div>
      <Home/>
      <div className='footer'>
          {/* Copyright */}
          <span>
            © 2026 {Constants.FULL_NAME}. All rights reserved.
          </span>
          {/* Links */}
          <span className='linkIcons'>
            {renderLinkIcon(Constants.GITHUB_LINK, Images.github)}
            {renderLinkIcon(Constants.LINKEDIN_LINK, Images.linkedin)}
          </span>
      </div>
    </>
  )
}

export default App

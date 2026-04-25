import simpleLogo from './assets/simple-logo.png'
import * as Constants from './Constants.ts'
import './App.css'
import Home from './pages/home/Home.tsx'

function App() {
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
          Check out my github at <a href={Constants.GITHUB_LINK} target='_blank'>{Constants.GITHUB_USERNAME}</a> to see more of my projects.
      </div>
    </>
  )
}

export default App

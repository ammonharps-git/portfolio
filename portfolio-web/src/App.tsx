import simpleLogo from './assets/simple-logo.png'
import './App.css'
import TextTyper from './TextTyper.tsx'

  const roles = [
    "Software Engineer",
    "Software Developer",
    "Software Architect",
  ];

  const firstName = "Ammon";
  const lastName = "Harps";
  const fullName = firstName + " " + lastName;
  const githubLink = "https://github.com/ammonharps-git";

function App() {
  return (
    <>
      <title>Ammon's Portfolio</title>
      <div className='header'>
        <img src={simpleLogo} className='header-logo' alt={`${fullName} Logo`}></img>
        <div className='headerText'>Home</div>
        <div className='headerText'>Contact Me</div>
        {/* TODO: Make these nav links */}
      </div>
      <h1>{fullName}</h1>
      <TextTyper sentences={roles}/>
      <div className='footer'>
          Check out my github at <a href={githubLink} target='_blank'>ammonharps-git</a> to see more of my projects.
      </div>
    </>
  )
}

export default App

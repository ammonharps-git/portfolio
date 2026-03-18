import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextTyper from './TextTyper.tsx'

  const roles = [
    "Software Engineer",
    "Software Developer",
    "Software Architect",
  ];


function App() {
  return (
    <>
      <title>Ammon's Portfolio</title>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ammon Harps</h1>
      <TextTyper sentences={roles}/>
      <div className='footer'>
        <div className="read-the-docs">
          Check out my github at <a href='https://github.com/ammonharps-git' target='_blank'>ammonharps-git</a> to see more of my projects.
        </div>
      </div>
    </>
  )
}

export default App

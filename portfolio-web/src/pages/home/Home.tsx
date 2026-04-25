import TextTyper from '../../components/text-typer/TextTyper.tsx'
import * as Constants from '../../Constants.ts'
import './Home.css'

function Home() {
  return (
    <>
      <h1>{Constants.FULL_NAME}</h1>
      <TextTyper sentences={Constants.ROLES}/>
    </>
  )
}

export default Home

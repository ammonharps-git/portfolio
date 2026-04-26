import TextTyper from '../../components/text-typer/TextTyper.tsx'
import profileImage from '../../assets/profile-pic.jpg'
import * as Constants from '../../Constants.ts'
import './Home.css'

function Home() {
  return (
    <>
        <div className='profileContainer'>
            <div className='nameTitleContainer'>
                <div className='name'>{Constants.FULL_NAME}</div>
                <TextTyper sentences={Constants.ROLES}/>
            </div>
            <img className='profileImage' src={profileImage} alt={`${Constants.FULL_NAME} profile picture`} />
        </div>
    </>
  )
}

export default Home

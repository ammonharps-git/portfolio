import TextTyper from '../../components/text-typer/TextTyper.tsx'
import profileImage from '../../assets/profile-pic.jpg'
import { Logos } from './ImageImporter.ts'
import * as Constants from '../../Constants.ts'
import './Home.css'

function Home() {
  class LabeledLogo {
    public image : string;

    public label : string;

    public labelBackgroundColor : string;

    public textColorOverride : string | undefined;

    constructor(image: string, label : string, labelColor: string, textColorOverride?: string) {
      this.image = image;
      this.label = label;
      this.labelBackgroundColor = labelColor;
      this.textColorOverride = textColorOverride;
    }
  }

  const skills : LabeledLogo[] = [
    new LabeledLogo(Logos.html, "HTML", "#ff4b00"),
    new LabeledLogo(Logos.css, "CSS", "#417aff"),
    new LabeledLogo(Logos.csharp, "C#", "#62397b"),
    new LabeledLogo(Logos.cpp, "C++", "#4462b3"),
    new LabeledLogo(Logos.c, "C", "#4462b3"),
    new LabeledLogo(Logos.typescript, "Typescript", "#587cff"),
    new LabeledLogo(Logos.javascript, "JavaScript", "#fffc44", "#000000"),
    new LabeledLogo(Logos.rust, "Rust", "#515151"),
    new LabeledLogo(Logos.python, "Python", "#e4b227", "#000000"),
    new LabeledLogo(Logos.java, "Java", "#ff8b43"),
  ];

  return (
    <div className='sectionsContainer'>
        <div className='profileContainer'>
            <div className='nameTitleContainer'>
                <div className='name'>{Constants.FULL_NAME}</div>
                <TextTyper sentences={Constants.ROLES}/>
            </div>
            <img className='profileImage' src={profileImage} alt={`${Constants.FULL_NAME} profile picture`} />
        </div>
        <div className='skillsContainer'>
          {
            skills.map(skill => (
            <div className='skillCard'>
              <img className='skillImage' src={skill.image}/>
              <div className='skillLabel' style={{background: skill.labelBackgroundColor, color: skill.textColorOverride}}>
                {skill.label}
              </div>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default Home

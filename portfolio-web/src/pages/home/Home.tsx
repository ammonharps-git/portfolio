import TextTyper from '../../components/text-typer/TextTyper.tsx'
import profileImage from '../../assets/profile-pic.jpg'
import { Images } from './ImageImporter.ts'
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
    new LabeledLogo(Images.html, "HTML", "#ff4b00"),
    new LabeledLogo(Images.css, "CSS", "#417aff"),
    new LabeledLogo(Images.csharp, "C#", "#62397b"),
    new LabeledLogo(Images.cpp, "C++", "#4462b3"),
    new LabeledLogo(Images.c, "C", "#4462b3"),
    new LabeledLogo(Images.typescript, "Typescript", "#587cff"),
    new LabeledLogo(Images.javascript, "JavaScript", "#fffc44", "#000000"),
    new LabeledLogo(Images.rust, "Rust", "#515151"),
    new LabeledLogo(Images.python, "Python", "#e4b227", "#000000"),
    new LabeledLogo(Images.java, "Java", "#ff8b43"),
  ];

  class SectionTitle {
    public mainTitle : string;
    public subTitle : string;

    constructor(mainTitle: string, subTitle : string) {
      this.mainTitle = mainTitle;
      this.subTitle = subTitle;
    }
  }

  function renderSectionTitle(title : SectionTitle) {
    return (
      <div className='sectionTitleContainer'>
        <div className='sectionTitle'>
          {title.mainTitle}
        </div>
        <div className='sectionSubTitle'>
          {title.subTitle}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='content'>
          <div className='profileContainer'>
              <div className='nameTitleContainer'>
                  <div className='name'>{Constants.FULL_NAME}</div>
                  <TextTyper sentences={Constants.ROLES}/>
              </div>
              <img className='profileImage hoverGlow' src={profileImage} alt={`${Constants.FULL_NAME} profile picture`} />
          </div>
          <div className='skillsContainer'>
            {renderSectionTitle(new SectionTitle("Explore Languages", "Click an icon to see more."))}
            <div className='skillsGrid'>
            {
              skills.map(skill => (
                <div className='skillCard'>
                  { /* TODO: make these expand into small blurb when clicked */}
                  <img className='skillImage hoverGlow' src={skill.image}/>
                  <div className='skillLabel' style={{background: skill.labelBackgroundColor, color: skill.textColorOverride}}>
                    {skill.label}
                  </div>
                </div>
              ))
            }
            </div>
          </div>
      </div>
    </>
  )
}

export default Home

import styles from './HeroStyles.module.css'
// import heroImg from '../../assets/hero-img.png'
import wall from '../../assets/wall.png'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'




function Hero() {
    const {theme,toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  

  return (
    <section id='hero' className= {styles.container}>
        <div className= {styles.colorModeContainer}>
            <img className = {styles.hero} src={wall} alt="profile picture" />
            <img className = {styles.colorMode} src={themeIcon} alt="" onClick={toggleTheme} />
        </div>

        <h1>
            Ayush
            <br />
            Singh Rawat
        </h1>
        <h2>Full Stack Dev</h2>
        <span>
            <a href="https://twitter.com/" target='_blank'>
                <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://github.com/" target='_blank'>
                <img src={githubIcon} alt="Github" />
            </a>
            <a href="https://linkedIn.com/" target='_blank'>
                <img src={linkedinIcon} alt="LinkedIn" />
            </a>
        </span>
        <p>
            With a passion for developing modern React web apps for commercial
            businesses.
        </p>

        <a href={CV} download>
            <button className='hover' download>Resume</button>
        </a>
    </section>
  )
}

export default Hero
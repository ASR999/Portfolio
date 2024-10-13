import styles from './HeroStyles.module.css'
// import heroImg from '../../assets/hero-img.png'
import wall from '../../assets/wall.png'
import wallwhit from '../../assets/wallwhit.png'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
import leetcodewhite from '../../assets/brand-leetcode.png'
import leetcodeblack from '../../assets/leetcode.svg'




function Hero() {
    const {theme,toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const imagee = theme === 'light' ? wallwhit: wall;
    const leet = theme === 'light' ? leetcodewhite: leetcodeblack;

  return (
    <>
    <section id='hero' className= {styles.container}>
        <div className= {styles.colorModeContainer}>
            <img className = {styles.hero} src={imagee} alt="profile picture" />
            <img className = {styles.colorMode} src={themeIcon} alt="" onClick={toggleTheme} />
        </div>

        <h1>
            Ayush Singh Rawat
        </h1>
        <h2>Full Stack Dev</h2>
        <span>
            <a  href="https://leetcode.com/u/Raiden_Asr/" target='_blank'>
                <img className = {styles.leet} src={leet} alt="Twitter" />
            </a>
            <a href="https://github.com/ASR999" target='_blank'>
                <img src={githubIcon} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/ayushsrawat/" target='_blank'>
                <img src={linkedinIcon} alt="LinkedIn" />
            </a>
        </span>
        <p>
        Crafting digital solutions that blend creativity with precision, yours truly thrives on building seamless, scalable applications. With a diverse portfolio majoring in web development, the work stands out for its blend of artistry and engineering.
        </p>

        <a href={CV} download>
            <button className='hover' download>Resume</button>
        </a>
    </section>
    </>
  )
}

export default Hero
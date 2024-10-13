import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import social from '../../assets/social.png'
import insight from '../../assets/insight.png'
import homew from '../../assets/homew.png'
import feed from '../../assets/feed.png'


function Projects() {
  return (
    <section id = "projects" className= {styles.container}>
        <h1 className='sectionTitle'> Projects</h1>
        <div className={styles.projectsContainer}>

            {/*Paste the github links of your projects here  */}
            <ProjectCard src={insight} link={ 'https://github.com/ASR999/HomeWise'} h3={'HomeWise'} p={'Real Estate listing '}/>
            <ProjectCard src={feed} link={ 'https://github.com/ASR999/FeedFlux'} h3={'FeedFlux'} p={'Anonymous feedback generator'}/>
            <ProjectCard src={homew} link={ 'https://github.com/ASR999/InsightPdf'} h3={'Insight Pdf'} p={'Pdf - SAAS'}/>
            
        </div>
    </section>
  );
}

export default Projects
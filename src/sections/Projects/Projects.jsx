import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id = "projects" className= {styles.container}>
        <h1 className='sectionTitle'> Projects</h1>
        <div className={styles.projectsContainer}>

            {/*Paste the github links of your projects here  */}
            <ProjectCard src={viberr} link={ 'https://github.com/ASR999/QRCODE-GEN'} h3={'QR Codegen'} p={'QR Code generator'}/>
            <ProjectCard src={viberr} link={ 'https://github.com/ASR999/QRCODE-GEN'} h3={'QR Codegen'} p={'QR Code generator'}/>
            <ProjectCard src={viberr} link={ 'https://github.com/ASR999/QRCODE-GEN'} h3={'QR Codegen'} p={'QR Code generator'}/>
            <ProjectCard src={viberr} link={ 'https://github.com/ASR999/QRCODE-GEN'} h3={'QR Codegen'} p={'QR Code generator'}/>
        </div>
    </section>
  );
}

export default Projects
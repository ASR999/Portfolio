import styles from './NavbarStyles.module.css'


const Navbar = () => {
 
  return (
    <div className={styles.container}>
      <a href="#hero"><p>Home</p></a>
      <a href="#projects"><p>Projects</p></a>
      <a href="#skills"><p>Skills</p></a>
      <a href="#contact" className={styles.contact}><p>Contact</p></a>
      </div>
  )
}

export default Navbar
import profilePicture from '../assets/profile-picture.png'
import '../styles/Header.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture} />
            <h3>Aldo Anthonius</h3>
            <p>Programmer - Web Development - Machine Learning</p>
            <div className='socialMedia'>
                <a href="https://www.instagram.com/aldo.anthonius/"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/aldo-anthonius-183a521a9/"><FaLinkedin /></a>
                <a href="https://github.com/aldoanthonius?tab=repositories"><FaGithub /></a>
            </div>
        </div>
    </header>
  )
}

export default Header
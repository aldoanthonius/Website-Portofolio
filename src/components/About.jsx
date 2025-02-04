import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { SiMoodle } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaPython } from "react-icons/fa6";
import { FaGit } from "react-icons/fa";


function About() {
  return (
    <section id="about">
        <div className='wrapper'>
            <h3>About</h3>
            <p>Energetic and curious Computer Science graduate with a deep enthusiasm for work. Team-oriented and adaptable,
                I thrive in collaborative settings and quickly embrace new challenges. With solid expertise across various areas of
                computer science, I am committed to consistently enhancing my skills and knowledge. Driven by a strong work
                ethic, I eagerly seek opportunities to make meaningful contributions, push boundaries, expand my horizons, and
                lend my expertise to significant technology initiatives.</p>
        
            <h4>Programming Language & Tools</h4>
            <div className='skills'>
                <FaHtml5 />
                <FaCss3Alt />
                <FaPhp />
                <IoLogoJavascript />
                <FaReact />
                <FaLaravel />
                <FaBootstrap />
                <SiMoodle />
                <AiOutlineConsoleSql />
                <FaPython />
                <FaGit />

            </div>
        </div>
    </section>
  )
}

export default About
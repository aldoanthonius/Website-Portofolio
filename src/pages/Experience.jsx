import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcSalesPerformance } from "react-icons/fc";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"
function Experience() {
    return (
        <>
            <Navbar />
            <div className='wrapper'>
                <h1>Experience</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 - 2023"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon ={<FcSalesPerformance />}>
                        <h3 className="vertical-timeline-element-title">Sales Team Promotion</h3>
                        <h4 className="vertical-timeline-element-subtitle">Jakarta, Indonesia</h4>
                        <p>● Conducted 20+ presentations to prospective students, highlighting university programs and opportunities</p>
                        <p>● Managed student data using Salesforce CRM, ensuring accurate record-keeping and follow-up</p>
                        <p>● Coordinated major university events including Globalicious and Open House</p>
                        <p>● Utilized Microsoft Teams for virtual student consultations and recruitment </p>
                        
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023 - 2024"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon ={<FaPhp />}>
                        <h3 className="vertical-timeline-element-title">Programmer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
                        <p>
                        ● Developed and maintained Learning Management System (LMS) platform using Moodle, serving educational
                        content to students</p>
                        <p>● Architected and implemented e-commerce functionality including shopping cart, payment integration, and
                        transaction history tracking</p>
                        <p>● Designed and developed user interface improvements resulting in enhanced user experience and navigation</p>
                        <p>● Created RESTful APIs for seamless integration between front-end and back-end systems</p>
                        <p>● Technologies used: HTML, CSS, JavaScript, PHP, SQL, Moodle</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2025 - present"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon ={<FaReact />}>
                        <h3 className="vertical-timeline-element-title">Website Portofolio</h3>
                        <h4 className="vertical-timeline-element-subtitle">Jakarta, Indonesia</h4>
                        <p>● Designed and developed responsive personal portfolio website showcasing projects and professional experience</p>
                        <p>● Built using React and JavaScript with modern UI/UX principles</p>
                        <p>● Implemented smooth animations and interactive elements to enhance user engagement</p>
                        <p>● Deployed and maintained website using Vercel for reliable hosting and continuous deployment</p>
                        <p>● Technologies: React, JavaScript, HTML, CSS, Vercel</p>

                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <Footer />
            <ScrollToTop />
        </>    
    )
}

export default Experience
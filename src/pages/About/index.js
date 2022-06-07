import React from 'react';
import jcface from '../../assets/images/jcface.JPG';

function About() {
    const quickInfo = [
        { title: "Certificate", subtitle: "Full Stack Web Development" },
        { title: "San Diego", subtitle: "Based in California" },
        { title: "Experience", subtitle: "Front and Back End Development and Marketing!"},
    ];
    const quickSkills = ["Git", "HTML + CSS", "JavaScript + jQuery", "Node.js", "Marketing", "...And More!"];
    return(
        <section id="about" className="about-me">
            <div className="quick-info">
                <div className="self-image">
                    <img src={jcface} loading="lazy" alt="Laura Jazmin" />
                </div>
                {quickInfo.map((info, i) => (
                    <div className="info-box" id={`info-${i + 1}`} key={`info-${i + 1}`}>
                    <h4>{info.title}</h4>
                    <p>{info.subtitle}</p>
                    </div>
                ))}
            </div>
            <div className="main-content">
                <h3>My name is Jazmin Anderson and...</h3>
                <p>
                    I am a San Diego-based independent web designer, and casual illustrator. I have experience with designing for both WordPress themes, as well as non-WordPress sites. All of my final coding is mobile responsive. I also have over 3 years experience in Marketing. I really enjoy combining the technical aspects of coding with the artistic aspects of Marketing. I'm highly adaptable to what needs to be done and can quickly learn anything that needs to be learned for a job.
                </p>
                <p>
                    I am currently working at Hanabusa IVF as a Marketing Coordinator, and ready to jumpstart my career in the tech field.
                </p>
                <ul className="quick-skills">
                    {quickSkills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="quick-info">
                <p className="about-text">
                    I am an amazing team player and ready to become and important asset to your company.
                </p>
            </div>
        </section>
    );
}

export default About;
import React from "react";

export default function About (){
    return (
    <>
     <div className="page-title" id="about-me-title">About Me </div>

      <div className="about-media">
        <br></br>

        <div className="about-box">
          <h1 className="about-h1">Who, me?</h1>
          <p className="box-text">
          As you might already be aware my name is Marc 
          Schmidt and I do stuff with computers. I currently 
          live in Calgary but I’m always willing to relocate 
          when an opportunity becomes available. In my free time 
          I like to fly fish and mountain bike in the summer as 
          well as ski and play hockey in the winter. I enjoy 
          software development because I think of it as almost 
          like mental carpentry where a problem is given and a 
          solution must be found. I enjoy learning new things 
          and I alway to try to have something new that I am 
          in the process of coming to grasp with whether that 
          is a new development language or an entirely new technology.  
          </p>
        </div>

        <br></br>

        <div className="about-box">
          <h1 className="about-h1">Education</h1>
          <ul>
            <li>
              <p className="box-text">September 2020 - May 2022 <br /> <strong>Southern Alberta Institute of Technology</strong><br/> 
              Technical Degree in Information Technology and a Major in Software Development <br/> Received Honors</p>
            </li>
            <li>
              <p className="box-text">July 2022 <br/> <strong>AWS Certified Cloud Practitioner</strong><br />
               Certification ID: 72JC966LFJB11WSL</p>
            </li>
            <li>
              <p className="box-text">July 2022 <br /><strong>AWS Certified Developer - Associate</strong>
               <br /> Currently in progress</p>
            </li>
          </ul>
        </div>

        <br></br>

        <div className="about-box">
          <h1 className="about-h1">Developer Experience : </h1>
          <ul>
            <p className="box-text"><strong>I have experience working with and using the following technologies : </strong></p>
            <li className="box-text">Object-Oriented languages including Java, JavaScript, C++, objective-C, and several others</li>
            <li className="box-text">Relational Database Systems including Oracle, mySQL, MariaDB, and several other RDBMS's</li>
            <li className="box-text">Development Frameworks including Spring, React, Angular, and a few others</li>
            <li className="box-text">Web Development Fundamentals like HTML, HTML5, and CSS</li>
            <li className="box-text">MVC Architecture</li>
            <li className="box-text">Version Control and Team Collaboration using GIT</li>
            <li className="box-text">Linux and a focus on Ubuntu</li>
            <li className="box-text">Web Security Industry Standards</li>
            <li className="box-text">Stripe Payment Process Integration</li>
          </ul>
          <h1 className="about-h1">Employment Experience :</h1>
          <ul>

            <p className="box-text">September 2021 - Present<br /><strong>Security Technician - Telus</strong>
            <br /> <br /><li>Install and repair new and existing security systems</li><li>Troubleshoot non functioning or malfunctioning hardware and software</li>
            <li>Communicate with customers to understand their specific needs and how systems can be designed to meet those identified specifications</li></p>

            <p className="box-text">June 2021 - September 2021 <br /> <strong>Digital Home Technician - Telus</strong>
            <br /> <br /><li>Troubleshoot, install and maintain home technology installations</li>
            <li>Communicate to customers company standards and available systems</li></p>

            <p className="box-text">March 2018 - June 2021 <br /><strong>Expeditor - Calgary Winter Club</strong>
            <br /> <br /><li>Make sure orders are completed correctly and at an appropriate speed</li>
            <li>Communicate with customers to ensure that their concerns are addressed while maintaining a professional image</li></p>
          </ul>
        </div>

      </div>
    </>
    );
}
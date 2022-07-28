import React from "react";

export default function Contact (){
    return (
        <>
            <h1 className="page-title">Contact</h1>
            <div className="contact-media">
                <a href="https://www.linkedin.com/in/marctheschmidt" target="_blank">
                    <img className="contact-image" src={require("../images/Linkedin-logo-png.png")} />
                </a>
                <a href="https://github.com/MarcSchmidtu006cu006fu006c" target="_blank">
                    <img className="contact-image" src={require("../images/GitHub-logo.jpeg")} />
                </a>
                <a href="mailto:marcemarc101@gmail.com" target="_blank">
                    <img className="contact-image" src={require("../images/112-gmail_email_mail-512.webp")} />
                </a>
                <p id="contact-email-text">Email: marcemarc101@gmail.com</p>
            </div>
        </>
    );
}
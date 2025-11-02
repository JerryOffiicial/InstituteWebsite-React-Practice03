import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'

function Contact() {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Learn how to make a complete website using React JS. Build college /
          university website in React JS step by step tutorial.
        </p>
        <ul>
            <li>Contact@gmail.com</li>
            <li>+94 6875988</li>
            <li>330/6 mmdaw kadwkdm, kkdkdk <br />MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
}

export default Contact;

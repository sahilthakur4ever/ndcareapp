import React, { useRef } from 'react';
import "./contactus.css"
import emailjs from "@emailjs/browser"


function Contactus() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ldez6wo', 'template_kaqmd4b', form.current, 'Av3DR8eQgkAtg58In')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
  )
}

export default Contactus
 
 
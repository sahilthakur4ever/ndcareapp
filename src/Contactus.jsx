import React, { useRef }  from 'react'

import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import emailjs from "@emailjs/browser";
import "./contactus.css"

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

    $(function () {
         
        $('#index-contact').on('click', function () {
  
          $(this).addClass("active-widget");
          //$("#index-contact i").addClass("fa-xmark");
          $('.contactform').addClass("active-contact-form");
          $('#index-contact-close').css("display", "block");
          $('#index-contact').css("display", "none");
          
      })
      $('#index-contact-close').on('click', function () {
      $("#index-contact").removeClass("active-widget");
      $('.contactform').removeClass("active-contact-form")
      $('#index-contact').css("display", "block");
      $('#index-contact-close').css("display", "none");
  })
      });

  return (
    <div>
        <div className="contactform position-fixed top-50">
    <form ref={form} onSubmit={sendEmail}>
        <div className="form-floating mb-3">
  
        <input type="text" name="user_name" id="name" placeholder="Name" className='forminput' />
            {/* <input type="text" className="form-control" id="name" placeholder="Name"/> */}
         
          </div>
        <div className="form-floating mb-3">
      
        <input type="email" name="user_email" id="email" placeholder="Enter Your E-mail" className='forminput'  />
            {/* <input type="email" className="form-control" id="email" placeholder="Enter Your E-mail"/> */}
            
          </div>
          <div className="form-floating mb-3">

            <input type="text"  name='number' id="number" placeholder="Mobile Number" className='forminput' />
            
          </div>
          <div className="form-floating mb-3">
     
          <textarea name="message"  id='message' rows="3" cols="30"  className='forminput' placeholder="Message" />
            {/* <textarea name="message" id="message" className="form-control" cols="30" rows="10" placeholder="Message"></textarea> */}
            
          </div>
          <div className="form-floating">
            <button className="form-button button-primary btn btn-success" type="submit" style={{borderRadius:"20px"}} value="send">Submit</button>
          </div>
    </form>
</div>
    <div className="fixe-contact position-fixed top-50" id="index-contact">
    <i class="fa fa-envelope" aria-hidden="true"></i>
</div>

<div className="fixe-contact position-fixed top-50 active-widget" id="index-contact-close" style={{display:"none"}}>
        <i className="fa-solid fa-xmark"></i>
</div>

    </div>
  )
}

export default Contactus;
import React, { useState } from "react"
import emailjs from "emailjs-com";
// import React from 'react';
import contact1 from "../pic/contact1.png"
import "./Contact.css"

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_e8lp1zv', 'template_0atea87', e.target, 'XU_WUCEwBuNQJCp6V')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  
    return (
        <div>
            <section className='Contact' id='contact'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>CONTACT</h4>
                        <h1>Contact With Me</h1>
                    </div>

                    <div className='content d_flex'>
                        <div className='left'>
                            <div className='box box_shodow'>
                                <div className='img'>
                                    <img src={contact1} alt='' />
                                </div>

                                <div className='details'>
                                    <h1>Kanyanat Saenkaew</h1>
                                    <p>Beginner code</p>
                                    <p>I'm a student who like to learn everythings</p> <br />
                                    <p>Phone: +660638567685</p>
                                    <p>Email: kanyanat.saenkaew25@gmail.com</p> <br />
                                    <span>FIND WITH ME</span>
                                <div className='button f_flex'>
                                    <button className='btn_shadow'>
                                    <a href="https://www.facebook.com/profile.php?id=100007377630681" target="_blank" rel="noreferrer">
                                        <i className='fab fa-facebook-f'></i>
                                    </a>
                                    </button>
                                    <button className='btn_shadow'>
                                    <a href="https://www.instagram.com/meowe_d?utm_source=qr" target="_blank" rel="noreferrer">
                                        <i className='fab fa-instagram'></i>
                                    </a>
                                    </button>
                                    <button className='btn_shadow'>
                                    <a href="https://www.linkedin.com/in/kanyanat-s-8425a81b2" target="_blank" rel="noreferrer">
                                        <i className='fab fa-linkedin-in'></i>
                                    </a>
                                    </button>
                                </div>
                                </div> 
                            </div>
                        </div>

                        <div className='right box_shodow'>
                            <form onSubmit={sendEmail}>
                                <div className='f_flex'>
                                    <div className='input row'>
                                        <span>YOUR NAME</span>
                                        <input type='text' name='name' onChange={InputEvent} />
                                    </div>
                                    <div className='input row'>
                                        <span>PHONE NUMBER</span>
                                        <input type='text' name='phone_number' onChange={InputEvent} />
                                    </div>
                                    </div>
                                    <div className='input'>
                                        <span>EMAIL </span>
                                        <input type='email' name='email' onChange={InputEvent} />
                                    </div>
                                    <div className='input'>
                                        <span>SUBJECT </span>
                                        <input type='text' name='subject' onChange={InputEvent} />
                                    </div>
                                     <div className='input'>
                                        <span>YOUR MESSAGE </span>
                                        <textarea cols='30' rows='10' name='message' onChange={InputEvent}></textarea>
                                    </div>
                                    <button className='btn_shadow'>
                                        SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )


// import emailjs from "emailjs-com";
// import React from 'react';

// export default function Contact() {

//     function sendEmail(e) {
//         e.preventDefault();

//     emailjs.sendForm('service_e8lp1zv', 'template_0atea87', e.target, 'XU_WUCEwBuNQJCp6V')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//         e.target.reset()
//     }

    // return(
    //     <div>
    //         <div className="container">
    //         <form onSubmit={sendEmail}>
    //                 <div className="row pt-5 mx-auto">
    //                     <div className="col-8 form-group mx-auto">
    //                         <input type="text" className="form-control" placeholder="Name" name="name"/>
    //                     </div>
    //                     <div className="col-8 form-group pt-2 mx-auto">
    //                         <input type="email" className="form-control" placeholder="Email Address" name="email"/>
    //                     </div>
    //                     <div className="col-8 form-group pt-2 mx-auto"> 
    //                         <input type="text" className="form-control" placeholder="Subject" name="subject"/>
    //                     </div>
    //                     <div className="col-8 form-group pt-2 mx-auto">
    //                         <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
    //                     </div>
    //                     <div className="col-8 pt-3 mx-auto">
    //                         <input type="submit" className="btn btn-info" value="Send Message"></input>
    //                     </div>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    // )
}
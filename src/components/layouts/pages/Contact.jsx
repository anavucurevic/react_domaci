import React, { Component } from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

class Contact extends Component{
    render(){
        function sendEmail(e) {
            e.preventDefault();
            emailjs.sendForm('service_m8dw6fx', 'template_55ujapi', e.target, 'cDNuXSvy79_2Y-ZmW')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
        }
        return(
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Naša lokacija</strong></h3>
                    </div>
                
                <div className="row">
                    <div className="col-md-7">
                    <iframe src="https://www.google.com/maps/d/embed?mid=1pj-BnoLQkCLLFKH2E_I2HzRjtJcrQjM&ehbc=2E312F" style={{
                        border: '0',
                        width: '100%',
                        height: '315px',
                        frameborder: '0'
                    }} allowFullScreen 
                    />
                    </div>
                    <div className="col-md-5">
                        <h4><strong>Kontaktirajte nas</strong></h4>
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Ime" name="name"/>
                            </div><br></br>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" name="email"/>
                            </div><br></br>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Usluga" name="subject"/>
                            </div><br></br>
                            <textarea className="form-control" cols="30" rows="3" placeholder="Ostavite poruku" name="message"/>
                            <br></br>
                            <input type="submit" className="btn btn-outline-primary text-uppercase" value="Pošaljite">
                               
                            </input>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        );
        }
}

export default Contact;

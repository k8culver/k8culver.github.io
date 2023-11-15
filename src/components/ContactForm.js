import React, { useState, useRef } from 'react';
import Button from './Button';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import iris from '../static/IMG_1557.PNG';


function ContactForm() {
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
          ...formData,
          [id]: value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        setIsSending(true);

        emailjs.sendForm('service_if6fu0n', 'template_f7hvmbq', form.current, 'gFgZ6_VB9nFHChdBY')
            .then((result) => {
                // show the user a success message
                setFormData('','','');
                setIsSending(false);
                setIsSent(true);
            }, (error) => {
                // show the user an error
                setIsSending(false);
                setIsSent(false);
            });
        
    };

    return (
        <div className="grid sm:grid-cols-2 max-w-3xl mx-auto -mt-10 lg:-my-16 xl:-my-24">
            <div className="pl-4 sm:pl-20 sm:order-2">
                <img src={iris} alt="Iris" className='w-36 sm:max-w-xs sm:w-full' />
            </div>
            <div className="px-4 max-w-sm relative">
                <h2 className="text-teal-light">Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className={`${isSent ? 'invisible' : ''}`}>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="name">Name</label>
                        <input
                            className="appearance-none border border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-border focus:shadow-gold"
                            type="text"
                            id="name"
                            placeholder="Name"
                            name="form_name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white mb-2">Email</label>
                        <input
                            className="appearance-none border border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-border focus:shadow-gold"
                            type="email"
                            id="email"
                            placeholder="Email"
                            name="form_email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-white mb-2">Message</label>
                        <textarea
                            className="appearance-none border border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-border focus:shadow-gold h-24"
                            id="message"
                            placeholder="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <ReCAPTCHA sitekey="6Leumg8pAAAAAMJJLJyDk7PydWxRxDygdenxcefq" />
                    <br/>
                    <Button text={`${isSending ? 'Sending...' : 'Send'}`} type="submit" disabled={isSending} styleType="outline" />
                </form>
                <div className={`${isSent ? 'absolute top-1/2' : 'hidden'}`}>
                    <p className="text-white">Thanks for reaching out!</p>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;

import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from './Button';
import emailjs from '@emailjs/browser';


function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        setIsSending(true);

        emailjs.sendForm('service_if6fu0n', 'template_f7hvmbq', form.current, 'gFgZ6_VB9nFHChdBY')
            .then((result) => {
                // show the user a success message
                setName('');
                setEmail('');
                setMessage('');
                setRecaptchaValue('');
                setIsSending(false);
                setIsSent(true);
            }, (error) => {
                // show the user an error
                setIsSending(false);
                setIsSent(false);
            });
    };

    return (
        <div className="px-8 pt-6 pb-8 mb-4 max-w-sm">
            <h2 className="text-teal-light">Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                    <label className="block text-teal-light mb-2" htmlFor="name">Name:</label>
                    <input
                        className="appearance-none border border-teal-light border-solid rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="name"
                        placeholder="Name"
                        name="form_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-teal-light mb-2">Email:</label>
                    <input
                        className="appearance-none border border-teal-light border-solid rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="form_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-teal-light mb-2">Message:</label>
                    <textarea
                    className="appearance-none border border-teal-light border-solid rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                        id="message"
                        placeholder="Message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                {/* <ReCAPTCHA
                    sitekey="your_recaptcha_site_key"
                    onChange={(value) => setRecaptchaValue(value)}
                /> */}
                <Button text={`${isSending ? 'Sending...' : 'Submit'}`} type="submit" disabled={isSending} />
                {/* <input type="submit" value="Send" /> */}

                {/* <Button text={`${isSending ? 'Sending...' : 'Submit'}`} type="submit" disabled={isSending || !recaptchaValue} /> */}
            </form>
        </div>

    );
}

export default ContactForm;

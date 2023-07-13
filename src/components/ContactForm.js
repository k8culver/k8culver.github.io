import React, { useState } from 'react';
import Button from './Button';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);

    // Verify the reCAPTCHA response
    if (recaptchaValue) {
      // Send the email using a server-side endpoint
      axios
        .post('/api/send-email', { name, email, message, recaptchaValue })
        .then((response) => {
          setIsSending(false);
          setIsSent(true);
          console.log(response.data);
        })
        .catch((error) => {
          setIsSending(false);
          console.log(error);
        });

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setRecaptchaValue('');
    }
  };

  return (
    <div className='inline-block px-8 pt-6 pb-8 mb-4'>
        <h2 className="text-teal-light">Contact Me</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-teal-light mb-2" htmlFor="name">Name:</label>
                <input
                    className="appearance-none border border-teal-light border-solid rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="name"
                    placeholder="Name"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-teal-light mb-2">Message:</label>
                <textarea
                className="appearance-none border border-teal-light border-solid rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>
            <ReCAPTCHA
                sitekey="your_recaptcha_site_key"
                onChange={(value) => setRecaptchaValue(value)}
            />
            <Button text={`${isSending ? 'Sending...' : 'Submit'}`} type="submit" disabled={isSending || !recaptchaValue} />
        </form>
    </div>

  );
}

export default ContactForm;

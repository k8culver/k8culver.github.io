import React, { useState } from 'react';
import Button from './Button';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='inline-block'>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-sm mb-2" htmlFor="name">Name:</label>
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
                <label htmlFor="email" className="block text-sm mb-2">Email:</label>
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
                <label htmlFor="message" className="block text-sm mb-2">Message:</label>
                <textarea
                className="appearance-none border border-teal-light border-solid rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>
            <Button text="Submit" />
        </form>
    </div>

  );
}

export default ContactForm;

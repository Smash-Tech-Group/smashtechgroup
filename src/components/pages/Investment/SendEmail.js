import React, { useState } from 'react';

const SendEmail = () => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [email, setEmail] = useState('');

    const sendEmail = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8000/send_email/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ subject, body, email }),
        });
        const data = await response.json();
        console.log(data.message);
    };    

    return (
        <form onSubmit={sendEmail}>
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} required />
            <button type="submit">Send Email</button>
        </form>
    );
};
export default SendEmail;
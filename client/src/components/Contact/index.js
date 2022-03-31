import React , { useState } from 'react';
//import validateEmail  from '../../utils'; issues importing this file - small enough to define here until bug can be fixed

const validateEmail = function(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    
    return (false)
}

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = function(event) {

        // validate inputs, set error message for invalid ipnuts onChange
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
        
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }

        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`);
              } else {
                setErrorMessage('');
              }
        }
        
        // validation is successfull
        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
        }

        
    }

    const handleSubmit = function(event) {
        event.preventDefault();
        console.log(formState); // leaving as front-end only for now
    }

    return (
        <section id="contact">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <p><input type="text" name="name" defaultValue={name} onChange={handleChange} /></p>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <p><input type="email" name="email" defaultValue={email} onChange={handleChange} /></p>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <p><textarea name="message" rows="5" defaultValue={message} onChange={handleChange} /></p>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
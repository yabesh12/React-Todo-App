import React from 'react'
import { useState } from 'react'

function ContactForm({addContact}) {

    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        phonenumber: "",
    });

    const handleChange = (event) => {
        setContactInfo({...contactInfo, [event.target.name] : [event.target.value] });
    };

    const handleSubmit = (event) => {
        // prevents the submit button refreshing the page
        event.preventDefault();
        addContact(contactInfo);
        
        console.log(contactInfo);
        setContactInfo({ name:"", email:"", phonenumber:""});
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Contact Form</h2>
                </div>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contactInfo.name}
                        onChange={handleChange}
                    />
                </div><br></br>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={contactInfo.email}
                        onChange={handleChange}
                    />
                </div><br></br>
                <div>
                    <input
                        type="number"
                        name="phonenumber"
                        placeholder="Phone Number"
                        value={contactInfo.phonenumber}
                        onChange={handleChange}
                    />
                </div><br></br>
                <div>
                    <button>Submit Contact</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
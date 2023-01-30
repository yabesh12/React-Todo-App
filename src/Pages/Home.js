import React from 'react';
import ContactForm from '../Components/ContactForm';
import ContactList from '../Components/ContactList';
import { useState } from 'react';

function Home() {
  // here we create an array state to store the contact form data
  const [contacts, updateContacts] = useState([]);

  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
  };

  console.log(contacts);  

  return (
    <div>
        Home
        <ContactForm addContact={addContact} />
        <ContactList contacts={contacts} />
    </div>
  )
}

export default Home
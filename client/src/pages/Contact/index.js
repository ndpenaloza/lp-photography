import { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import Navbar from '../../components/Navbar';

class Contact extends Component {
  render() {
    return(
      <div>
        <header>
          <Navbar/>
        </header>
        <h1 className='head-text'>
          Contact
          </h1>
          <div className='container'>
            <ContactForm/>
          </div>
      </div>
    )
  }
}

export default Contact;
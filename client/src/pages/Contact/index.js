import { Component } from 'react';
import ContactForm from '../../components/ContactForm';

class Contact extends Component {
  render() {
    return(
      <div>
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
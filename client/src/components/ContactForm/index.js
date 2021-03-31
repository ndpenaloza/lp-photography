import React from 'react';
import { motion } from 'framer-motion';

function ContactForm() {
  return(
    <motion.div
    initial={{ 
      scale: 0,
      opacity: 0
    }}
    animate={{ 
      scale: 1,
      opacity: 1
    }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    className='container' id='contact-form'>
    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id='name' type="text" className="validate"/>
          <label htmlFor="name">Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className='row'>
        <div class="input-field col s12">
          <textarea id="message" class="materialize-textarea"></textarea>
          <label for="message">Message</label>
        </div>
        <div className='center-align'>
          <button class="waves-effect waves-light btn-large hoverable">Button</button>
        </div>
      </div>
    </form>
  </div>
  </motion.div>
  )
}

export default ContactForm;
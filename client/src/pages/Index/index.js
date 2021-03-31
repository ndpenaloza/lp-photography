import { Component } from 'react';
import { motion } from 'framer-motion';

class Index extends Component {
  render() {
    return(
      <div>
        <motion.h1
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}>Liza Penaloza</motion.h1>
        <motion.h4
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 3}}>Photographer</motion.h4>
        <div className='row'>
          <motion.a
          initial={{x: -1000}}
          animate={{x: 0}}
          transition={{duration: 1}}className="waves-effect waves-light btn-large" href='/home'>Home</motion.a>
          <motion.a
          initial={{y: 1000}}
          animate={{y: 0}}
          transition={{duration: 1}}className="waves-effect waves-light btn-large" href='/portfolio'>Portfolio</motion.a>
          <motion.a
          initial={{x: 1000}}
          animate={{x: 0}}
          transition={{duration: 1}}className="waves-effect waves-light btn-large" href='/contact'>Contact</motion.a>
        </div>
      </div>
    )
  }
}

export default Index;
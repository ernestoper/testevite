import React, { useState } from 'react'
// import { icons } from './Data';
// import { experiences } from './Data';
// import { finishes } from './Data';
import { motion } from 'framer-motion';

function Skills () {
  const [active, setActive] = useState(1)
  return (
    <div className='bg-azuldio'>
          <div className=" w-full h-max ">
            <motion.div
              initial={{opacity: 0}}
              whileInView={{y: [-100, 0], opacity: 1}}  
              className="text-center mb-2 text-white"
            >
              <span>Estas me vendo?</span>
              <h1>Skills And Experience</h1>
            </motion.div>
          </div>

    </div>


  )
}

export default Skills
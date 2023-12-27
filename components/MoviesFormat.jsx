'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {  useState } from 'react'


const Moviesformat = ({ tarjet }) => {

  const [first, setfirst] = useState([])

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.05 * index
        }
      }
    }
  }

  return (


    <div id='a' className='text-black  max-w-header gap-y-10 p-4 mt-6 flex flex-col text-center items-center'>
      {/* <h1 className="text-heading1-bold text-purple-1 ">Series</h1> */}
      <div className='movie-sv-a select-none'>

        {tarjet.map((x) => {
          return (
            <Link href={`/Details/${x._id}`} key={x._id} >
              <motion.div
                className='relative  flex flex-col gap-y-2 text-center items-center   '
                initial='initial'
                variants={fadeInAnimationVariants}
                whileInView='animate'
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                custom={1}
              >

                <div className='flex w-full items-center  justify-center  rounded-2xl  '>
                  <img className='object-contain rounded-t-2xl  w-full' src={x.imgUrl} alt="" />
                </div>
                <p className='text-body-bold text-neutral-200'>{x.title}</p>
              </motion.div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Moviesformat
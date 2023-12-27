'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const LinksAnime = ({ animes }) => {

    const [firsta, setfirsta] = useState('')
    const [second, setsecond] = useState('')
    const [data, setdata] = useState([])
    console.log('ose',animes)

    // console.log(animes.links)
    useEffect(() => {
        setfirsta(animes.link)
        setsecond(animes.linkb)
    }, [])

    useEffect(() => {
      const links = [firsta, second]
      SVGMetadataElemen
    }, [second])
    

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

        <div id='a' className='max-w-header gap-y-10 py-4 flex flex-col text-center items-center'>
            {firsta && (
                <div className='w-full'>
                    
                    <div className='home-sv-b w-full'>
                        {firsta.map((link, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    className='w-full flex  max-xl:flex-col justify-around p-5 gap-7 text-center items-center shadow bg-white '
                                    initial='initial'
                                    variants={fadeInAnimationVariants}
                                    whileInView='animate'
                                    whileHover={{ scale: 1.1 }}
                                    viewport={{ once: true }}
                                    custom={index}
                                >

                                    <div className='font-bold gap-4 text-ml flex justify-between items-center'>
                                        <img width={55} src="/assets/logo.svg" alt="" />
                                        <p className='text-purple-3'>{link.name} </p>

                                    </div>


                                    <div className='flex justify-center gap-4 text-small-semibold '>
                                        <p className='font-bold text-purple-3'>Audio: </p>
                                        <p>{link.audio}</p>
                                    </div>

                                    <div className='text-start gap-4  text-small-semibold   flex shadow-2xl p-1 rounded-lg max-w-md'>
                                         <p className='font-bold text-purple-3'>notes: </p>
                                         sapiente tempore. A voluptatem laborum quibusdam.
                                    </div>

                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            )}


        </div>
    )
}

export default LinksAnime
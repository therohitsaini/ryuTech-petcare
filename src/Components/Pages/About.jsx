import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

function About() {
    return (
        <div className='about-section border border-red-600  flex gap-5 px-20 border-none max-sm:flex  max-sm:flex-col-reverse max-sm:px-4'>
            <div className='about-img-section w-[70%] max-sm:w-full overflow-hidden max-sm:flex max-sm:flex-col max-sm:gap-3'>
                <div className='img-about'>
                <img className='h-[500px] w-full object-cover hover:scale-105 duration-500' src="https://t4.ftcdn.net/jpg/07/65/22/49/240_F_765224994_uFTYg8wIFM5S2nSQ5yQtjdQdsMHPRphB.jpg" alt="" />
                {/* <div className='absolute bg-black/20 h-[500px] w-[62%] top-178 reletive opacity-0 hover:opacity-45 '></div> */}
                </div>
                <p className='flex gap-4 justify-center mt-5 font-semibold  '>
                    <span>March 7, 2025</span>
                    <span>john dany</span>
                </p>
                <massage className="flex justify-center  font-serif text-4xl mt-3 max-sm:text-center">
                    Have a Beautiful Weekend
                </massage>
                <p className='max-sm:text-center'>What are you up to this weekend? I'm looking forward to spending time with my sister Lucy and remembering her late husband Paul; this Sunday is the 10th anniversary of his death, and we all miss him. Hope you have a good one, and here are a few links from around the web...</p>

            </div>
            <div className='about-profile w-[30%] max-sm:w-full flex   flex-col overflow-hidden'>
                <img className='h-[400px] w-full object-cover hover:scale-110 duration-500' src='https://img.freepik.com/free-photo/vibrant-portrait-person-bright-environment_23-2151078858.jpg?uid=R167309508&ga=GA1.1.1966480882.1738846517&semt=ais_hybrid'></img>
                <div className='details bg-yellow-600 p-8 flex flex-col justify-center overflow-hidden'>
                    <p className='flex justify-center text-3xl font-semibold'>Johan salimar</p>
                    <div className='icone gap-3  flex justify-center mt-3 '>
                        <div className=' h-10 w-10 bg-black text-white rounded-full flex justify-center items-center'>
                            <Icon className='text-2xl ' icon="line-md:facebook" />
                        </div>
                        <div className=' h-10 w-10 bg-black text-white rounded-full flex justify-center items-center'>
                            <Icon className='text-2xl ' icon="line-md:instagram" />
                        </div>
                        <div className=' h-10 w-10 bg-black text-white rounded-full flex justify-center items-center'>
                          <Icon width={30} icon={"line-md:twitter"} />
                        </div>
                        <div className=' h-10 w-10 bg-black text-white rounded-full flex justify-center items-center'>
                 <Icon width={26} icon={"icon-park-solid:instagram-one"} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About
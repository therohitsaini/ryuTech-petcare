import React from 'react'
import Navbar from '../NavCompo/Navbar'
import { Icon } from '@iconify/react/dist/iconify.js'
import About from './About'
import Service from './Service'
import Footer from '../NavCompo/Footer'
import Bloging from './Bloging'

function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <div className="font-roboto  container max-w-full border border-red-800 border-none  mt-10">
                <div className="home-section flex justify-between px-20 gap-5 bg-white text-black max-sm:flex max-sm:flex-col max-sm:px-5 max-sm:pt-20 max-sm:pb-10 max-sm:gap-14">
                    <div className="hero-section w-full h-[550px] flex flex-col justify-center max-sm:h-[350px] ">

                        <h1 className="font-bold text-8xl flex flex-col max-sm:text-6xl max-sm:text-center ">
                            Best help
                            <span className='flex flex-col '>
                                for your {" "}
                                <span className="">Lovely Pets</span>
                            </span>
                        </h1>
                        <p className="mt-5 font-roboto  text-slate-900 border-b border-slate-500 pb-1 max-sm:text-center">
                            There are so many challanges that come with finding a good,local pet sitter. You need to find someone both
                        </p>
                        <div className="btn-section mt-5 gap-5 flex max-sm:flex max-sm:justify-center max-sm:flex-col">
                            <button className="btn p-2 px-4 bg-blue-400 text-white rounded-md  font-semibold max-sm:p-3 max-sm:text-lg ">
                                Sehedule a call
                            </button>
                            <button className="btn p-2 px-7 rounded-md font-semibold  border-2 border-blue-500 flex  items-center gap-1 max-sm:mb-20 max-sm:p-3 max-sm:justify-center">
                                {" "}
                                Learn more
                                <Icon icon="weui:arrow-outlined" className='mt-1 text-xl' />
                            </button>
                        </div>
                    </div>
                    <div className="img-section border border-blue-600 w-full grid grid-cols-2 gap-1 p-2 border-none max-sm:hidden ">
                        <div className='Home-img border border-blue-500 flex justify-center border-none'>
                            <img className='h-72  ' src="../src/assets/adorable-white-black-kitty-with-monochrome-wall-her.jpg" alt="" />

                        </div>
                        <div className='Home-img  h-60 flex justify-center items-center '>
                            <div className='h-56 w-56 p-4 flex justify-center items-center border border-slate-300  animate-pulse'>
                            <Icon className='text-9xl ' icon={"logos:whatsapp-icon"}/>

                            </div>
                        </div>
                        <div className='Home-img  h-72  flex justify-center items-center '>
                            <div className='h-32 w-32 border border-slate-300 rounded-full flex justify-center items-center'>
                                <Icon className='text-5xl' icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow" />
                            </div>


                        </div>
                        <div className='Home-img border border-blue-500 h-72 flex justify-center border-none '>
                            <img className='h-full' src="../src/assets/cute-beagle-dark-brown-bow-tie.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <About />
            <Bloging />
            <Service />
            <Footer />

        </>
    )
}

export default Home
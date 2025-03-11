import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

function Service() {
    return (
        <div className='Service-container flex gap-5 px-20 mt-10 max-sm:flex max-sm:flex-col max-sm:px-3'>
            <div className='availble-serviece  w-full border border-slate-300  px-7 flex flex-col gap-5 py-5 rounded-md'>
                <h1 className='font-semibold text-5xl flex flex-col'>Service  <span>We Provide</span></h1>
                <div className='sevice-medi flex justify-between items-center border-b border-slate-400 '>
                    <p className='font-serif text-[17px]'>Pet Medical Administertion</p>
                    <Icon className='text-3xl ' icon="solar:arrow-right-broken" />
                </div>

                <div className='sevice-medi flex justify-between items-center border-b border-slate-300 '>
                    <p className='font-serif text-[17px]'>Overnight Pet Care</p>
                    <Icon className='text-3xl ' icon="solar:arrow-right-broken" />
                </div>
                <div className='sevice-medi flex justify-between items-center border-b border-slate-300 '>
                    <p className='font-serif text-[17px]'>Puppu Day Care</p>
                    <Icon className='text-3xl ' icon="solar:arrow-right-broken" />
                </div>

                <div className='sevice-medi flex justify-between items-center border-b border-slate-300 '>
                    <p className='font-serif text-[17px]'>Training through Goodpup</p>
                    <Icon className='text-3xl ' icon="solar:arrow-right-broken" />
                </div>

                <div className='sevice-medi flex justify-between items-center border-b border-slate-300 '>
                    <p className='font-serif text-[17px]'>Pet Housing Seting</p>
                    <Icon className='text-3xl ' icon="solar:arrow-right-broken" />
                </div>

            </div>
            <div className='availble-serviece h-96 w-full border border-black overflow-hidden border-none'>
                <img className='h-full w-full object-cover hover:scale-110 duration-500 rounded-md' src='https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            </div>
            <div className='availble-serviece  w-full border border-black p-2 flex flex-col gap-5 bg-blue-200 border-none rounded-md'>
                <p className='border border-blue-700 border-none font-roboto'>
                    Caring for a pet requires love, patience, and responsibility. Ensure your pet has a balanced diet suited to their breed and age. Fresh water should always be available. Regular vet check-ups help detect health
                </p>
                <button className='bg-blue-400  font-semibold text-white py-2 text-[17px] w-44 rounded-md'>See more</button>
                <div className='border border-blue-700 text-white flex  border-none'>
                    <h2 className='font-semibold text-xl flex flex-col gap-2 w-full'>
                      
                        {/* <span className=' text-[14px]  text-slate-200'>Play the Video</span> */}
                        <iframe  width='full' height="280" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                      
                    </h2>

                    <img className='h-44' src="" alt="" />
                </div>



            </div>
        </div>
    )
}

export default Service
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

function Bloging() {
    return (
        <div className='Bloging-main-container mt-10 flex flex-col items-center justify-center border  border-red-600 py-5 gap-3 max-sm:px-2 border-none'>
            <header className='header w-[600px] bprder border-slate-200 bg-black p-2 rounded-md max-sm:w-full '>
                <div className='border border-black flex items-center gap-4 '>
                    <div className='profile h-8 w-8  rounded-full  text-white text-4xl'> <Icon icon="gg:profile" /> </div>
                    <input className='p-2 w-full border border-slate-50 text-white rounded-md' type='text' placeholder='you want to ask' />
                </div>
                <div className='border border-red-700 flex justify-between px-14 bg-black text-md py-2 border-none'>
                    <span className='flex items-center text-white '> <Icon className='' icon="fxemoji:whitequestionmark" /> Ask</span>
                    <span className='flex items-center text-white'><Icon icon={"ic:outline-question-answer"} />  Answer</span>
                    <span className='flex items-center text-white'><Icon icon={"material-symbols-light:post-add"} /> Post</span>
                </div>
            </header>
            <div className=' border border-yellow-400 w-full flex items-center flex-col overflow-hidden sticky top-0 border-none '>
                <div className=''>
                <div className='user-profile-desc border border-slate-200    w-[600px] rounded-md mt-3 px-2 py-2 max-sm:w-full  '>
                    <div className='user-profile flex items-center gap-3  max-sm:gap-0 '>
                        <div className='profile  rounded-full  text-black  text-5xl '> <Icon icon="gg:profile" /> </div>
                        <div className='user-name max-sm:px-4'>
                            <h2 className=' font-bold '>Joahn samir  </h2>
                            <p className='text-slate-700'>spone deander</p>
                        </div>

                    </div>
                    <h2 className='max-sm:mt-2'>   I want to study, but I waste my whole day without doing anything significant, and am unable to concentrate. What should I do?</h2>
                    <div className='user-img h-96 mt-3 '>
                        <img className='object-cover h-full w-full' src='../src/assets/dog_wit_girl[1].jpg' />

                    </div>
                    <div className='border border-slate-300  flex p-1 gap-10 items-center mt-2 rounded-md bg-white '>
                        <span className='flex items-center text-md font-semibold'><Icon width={32} icon="weui:like-outlined"/>Like </span>
                        <span className='flex items-center text-md font-semibold '><Icon width={32} icon="material-symbols-light:comment-outline-sharp"/>Comments </span>
                        <span className='flex items-center text-md font-semibold '><Icon width={32} icon="humbleicons:share"/> Share</span>

                    </div>
                </div>
                {/* <div className='user-profile-desc border border-green-500  w-[600px] rounded-md mt-3 px-2 py-2 '>
                    <div className='user-profile flex items-center gap-3 '>
                        <div className='profile  rounded-full  text-black  text-5xl p-1'> <Icon icon="gg:profile" /> </div>
                        <div className='user-name '>
                            <h2 className=' font-bold '>Joahn samir  </h2>
                            <p className='text-slate-700'>spone deander</p>
                        </div>

                    </div>
                    <h2>   I want to study, but I waste my whole day without doing anything significant, and am unable to concentrate. What should I do?</h2>
                    <div className='user-img h-96 mt-3 '>
                        <img className='object-cover h-full w-full' src='./src/assets/zfohxnf8t3pa1.webp' />

                    </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Bloging
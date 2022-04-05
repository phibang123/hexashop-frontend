import React from 'react'

export default function FromHelp() {
  return (
    <>
     <div className='border-t-2 border-dashed'>
       <div className='2xl:max-w-8xl mx-auto grid grid-rows-3 grid-cols-6 my-20 gap-20'>
          <div className='col-span-4 row-span-2'>
            <h1 className='text-dark-primary font-bold text-6xl leading-relaxed mb-5'>By Subscribing To Our Newsletter You Can Get 30% Off...</h1>
            <p className='text-gray-400 text-2xl italic'>Details to details is what makes Hexashop different from the other themes.</p>
          </div>
          <div className='col-span-4 row-span-3 '>
            <div className='grid grid-cols-11'>
             <input name="name" type="text" className='col-span-5 border border-black text-xl placeholder-gray-400 placeholder:italic placeholder:text-2xl mr-5 px-10 py-5' placeholder='Your name' ></input>
              <input name="name" type="text" className='col-span-5 border border-black text-xl placeholder-gray-400 placeholder:italic placeholder:text-2xl mr-5 px-10 py-5' placeholder='Your Email Address' ></input>
              <button className='group col-span-1 bg-dark-primary hover:bg-transparent transition-all duration-500'>
                <i className='fa fa-paper-plane group-hover:text-black text-slate-100 text-2xl'></i>
              </button>
            </div>
          </div>
          <div className='col-start-5 col-end-6 row-start-1 row-end-2'>
            <h1 className='text-black text-2xl font-bold mb-2'>Store Location:</h1>
            <ul>
              <li className='text-gray-400 text-2xl mb-1'>Sunny Isles Beach, FL</li>
              <li className='text-gray-400 text-2xl'>33160, United States</li>
            </ul>
          </div>
           <div className='col-start-6 col-end-7 row-start-1 row-end-2'>
            <h1 className='text-black text-2xl font-bold mb-2'>Work Hours:</h1>
            <ul>
              <li className='text-gray-400 text-2xl mb-1'>07:30 AM - 9:30 PM</li>
              <li className='text-gray-400 text-2xl '>33160, United States</li>
            </ul>
          </div>
         
          <div className='col-start-6 col-end-7 row-start-2 row-end-3'>
          <h1 className='text-black text-2xl font-bold mb-2'>Phone:</h1>
            <ul>
              <li className='text-gray-400 text-2xl mb-1'>012323232323</li>
            </ul>
          </div>
          <div className='col-start-5 col-end-6 row-start-2 row-end-3'>
          <h1 className='text-black text-2xl font-bold mb-2'>Email:</h1>
            <ul>
              <li className='text-gray-400 text-2xl mb-1'>phibang7899@gmail.com</li>
            </ul>
          </div> 
          <div className='col-start-5 col-end-6 row-start-3 row-end-4'>
          <h1 className='text-black text-2xl font-bold mb-2'>Office Location:</h1>
            <ul>
              <li className='text-gray-400 text-2xl mb-1'>North Miami Beach</li>
            </ul>
          </div> 
          <div className='col-start-6 col-end-7 row-start-3 row-end-4'>
          <h1 className='text-black text-2xl font-bold mb-2'>Social Media:</h1>
            <ul>
              <li className='text-gray-400 text-2xl mb-1'>Facebook, Instagram,</li>
              <li className='text-gray-400 text-2xl'>Behance, Linkedin</li>
            </ul> 
          </div> 
       </div>
      </div>
    </>
  )
}

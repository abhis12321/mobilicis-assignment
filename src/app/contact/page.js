"use client"
import React, { useState } from 'react'

export default function Page() {
  const [email , setEmail] = useState('');
  const [subject , setSubject] = useState('');
  const [message , setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email , subject , message);

    // handle the contact-function with the help of the these user-data
    // post of put method API's or anyother way

    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <div className='flex justify-center items-center py-3' style={{minHeight:'calc(100vh - 4rem)'}} >
      <form className="flex flex-col gap-2 bg-gradient-to-tr from-slate-900 via-cyan-950/70 to-slate-900 w-[98%] max-w-[700px] px-2 py-5 sm:p-8 rounded-lg shadow-[0_0_5px_gray]" onSubmit={handleSubmit}>
        <h1 className='mx-auto text-center py-4 sm:px-8 text-4xl rounded-md font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-900 w-fit'>Contact me</h1>
      
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='example@gmail.com' className='bg-slate-900/40 focus:border-cyan-700 border-2 border-gray-700 p-2 text-center outline-none rounded' required/>
        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder='Enter your subject/topic' className='bg-slate-900/40 focus:border-cyan-700 border-2 border-gray-700 p-2 text-center outline-none rounded' required/>
        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='Enter your message/suggestion' cols="30" rows="10" className='bg-slate-900/40 focus:border-cyan-700 border-2 border-gray-700 p-2 text-center outline-none rounded' required></textarea>
        <input type="submit" value={'Send'} placeholder='Enter your subject/topic' className='bg-red-950 hover:bg-red-700 active:bg-violet-900 border-2 border-gray-700 p-2 text-center outline-none rounded font-bold cursor-pointer' required/>
      </form>
    </div>
  )
}

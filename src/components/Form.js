import React from 'react'

const Form = () => {
  return (
    <div className="form w-3/4  mb:w-2/3 mt-0 mb-5 mx-auto">
      <h6 className='font-bold text-gray-400 text-xl'>Sign up to download the free PDF</h6>
      <form>
        <div className="flex flex-col md:flex-row md:-mx-2">
            <label for="first_name" className="sr-only">First name</label>
            <input className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full md:w-1/2" type="text" placeholder="First name" id="first_name"/>
            
            <label for="last_name" className="sr-only">Last name</label>
            <input className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full md:w-1/2" type="text" placeholder="Last name" id="last_name"/>
        </div>
    
        <div className="flex flex-col md:flex-row md:-mx-2">
            <label for="email" className="sr-only">Your email</label>
            <input className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full md:w-1/2" type="email" placeholder="john@email.com" id="email"/>
            
            <label for="title" className="sr-only">Title</label>
            <input className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full md:w-1/2" type="text" placeholder="Your title" id="title"/>
        </div>
        <div className="flex flex-col md:flex-row md:-mx-2">
            <button class="bg-blue-700 text-blue-200 text-sm mt-4 md:mx-2 rounded-lg py-2 px-4 block w-full">Create account</button>
        </div>
      </form>
    </div>
  )
}

export default Form;
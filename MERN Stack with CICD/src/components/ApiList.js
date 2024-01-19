  import React, { useState } from 'react'

    const ApiList = ({ fetchData }) => {
      const [value, setValue] = useState('');

      const handleEnter = e => {
        if(e.key === 'Enter'){
          fetchData({ params: { title: value }});
          setValue('');
        }
      }
      const handleButtonSearch = () => {
        if(value.length) {
          fetchData({ params: { title: value }});
          setValue('');
        }
      }
    return (
      <div className='bg-gradient-to-r text-center from-indigo-500 via-purple-500 to-pink-500 py-20 px-20'>
        <h3 className='text-2xl text-white font-semibold'>Search APIs</h3>
        <div className='flex items-center mt-6 max-w-md  mx-auto bg-white rounded-md'>
          <input 
          type="search"
          className='w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none'
          placeholder='Random fact of dogs'
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleEnter}
          />
          <button className='bg-blue-500 w-20 h-12 text-white rounded-r-md flex items-center justify-center' onClick={handleButtonSearch}>
            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd" />
                            </svg>
            </button>
        </div>
      </div>
    )
  }

  export default ApiList;

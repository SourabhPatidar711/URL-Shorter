import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          URL Shortener
        </h1>
        <p className="text-gray-400 mb-8">Create short and easy-to-share links in seconds.</p>

        <UrlForm/>

        
      </div>
    </div>
  )
}

export default HomePage
import React from 'react'

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <p className="text-xl font-medium text-gray-500 cursor-default">Group Lunch</p>
        <p className="py-2 text-lg font-light text-gray-500 sm:py-0 cursor-default">2020</p>
      </div>
    </footer>
  )
}

export default Footer

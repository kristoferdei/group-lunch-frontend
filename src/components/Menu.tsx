import React from 'react'

const Menu: React.FunctionComponent = () => {
  return (
    <div className="flex justify-center pt-16">
      <div className="flex rounded-md mt-8">
        <p
          className="py-2 px-4 leading-tight bg-white border rounded-l-lg
                 border-gray-400 text-gray-700 border-r-0
                 hover:bg-gray-500 hover:text-white"
        >
          <span className="cursor-default">Previous</span>
        </p>
        <p
          className="py-2 px-4 leading-tight bg-white border border-gray-400 text-gray-700 border-r-0
                 hover:bg-gray-500 hover:text-white"
        >
          <span className="cursor-default">1</span>
        </p>
        <p
          className="py-2 px-4 leading-tight bg-white border border-gray-400 text-gray-700 border-r-0
                 hover:bg-gray-500 hover:text-white"
        >
          <span className="cursor-default">2</span>
        </p>
        <p
          className="py-2 px-4 leading-tight bg-white border border-gray-400 text-gray-700 border-r-0
                 hover:bg-gray-500 hover:text-white"
        >
          <span className="cursor-default">3</span>
        </p>
        <p
          className="py-2 px-4 leading-tight bg-white border rounded-r-lg border-gray-400 text-gray-700
                 hover:bg-gray-500 hover:text-white"
        >
          <span className="cursor-default">Next</span>
        </p>
      </div>
    </div>
  )
}

export default Menu

import React from 'react'

const Navigation: React.FunctionComponent = () => {
  return (
    <nav className="sm:flex sm:justify-center sm:items-center mt-4">
      <div className="flex flex-col sm:flex-row">
        <p className="mt-3 text-gray-600 sm:mx-3 sm:mt-0 cursor-default">Range:</p>
        <input type="range" />
        <p className="mt-3 text-gray-600 sm:mx-3 sm:mt-0 cursor-default">Sort by:</p>
        <select
          className="block shadow border border-gray-400 hover:border-gray-500
                            rounded leading-tight focus:outline-none"
        >
          <option>Distance</option>
          <option>Price</option>
        </select>
      </div>
    </nav>
  )
}

export default Navigation

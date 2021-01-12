import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search: React.FunctionComponent = () => {
  return (
    <div className="relative mt-6 max-w-lg mx-auto">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
      </span>
      <input
        className="w-full border rounded-md pr-4 py-2
                   focus:border-gray-700 focus:outline-none focus:outline-none text-center"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

export default Search

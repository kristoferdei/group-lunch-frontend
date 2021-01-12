import { shallow } from 'enzyme'
import Search from '../../components/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

describe('Search component', () => {
  it('should render without crashing', () => {
    shallow(<Search />)
  })

  it('should render the icon', () => {
    const wrapper = shallow(<Search />)
    const icon = <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
    expect(wrapper.contains(icon)).toEqual(true)
  })

  it('should render the input', () => {
    const wrapper = shallow(<Search />)
    const input = (
      <input
        className="w-full border rounded-md pr-4 py-2
                   focus:border-gray-700 focus:outline-none focus:outline-none text-center"
        type="text"
        placeholder="Search"
      />
    )
    expect(wrapper.contains(input)).toEqual(true)
  })
})

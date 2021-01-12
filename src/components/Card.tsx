import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu'
import { RestaurantApi } from '../api/restaurant.api'
import { RestaurantDto } from '../api/dto/restaurant.dto'
import { createOne } from '../api/voting.api'
import VotingButton from './VotingButton'

const Card: React.FunctionComponent = () => {
  const [restaurants, setRestaurants] = useState<RestaurantDto[]>([])
  let [sortedRestaurants, setSortedRestaurants] = useState<RestaurantDto[]>([])
  useEffect(() => {
    async function fetchAll(): Promise<void> {
      const resp = await RestaurantApi.getAll()

      setRestaurants(resp)
      setSortedRestaurants(resp)
    }
    fetchAll().then(() => {
      console.log('restaurants are displayed')
    })
  }, [])

  const [input, setInput] = useState('')
  const handleChange = (e: any): void => {
    e.preventDefault()
    setInput(e.target.value)
  }

  if (input.length > 0) {
    sortedRestaurants = sortedRestaurants.filter((i) => {
      return i.name.toLowerCase().match(input) || i.name.toUpperCase().match(input) || i.name.match(input)
    })
  }

  const [value, setValue] = useState<number>(3)

  const handleSlide = (e: any): void => {
    setValue(e.target.value)
    const sorted = [...restaurants].filter((a) => {
      return a.distance <= value
    })
    setSortedRestaurants(sorted)
  }

  const sortAsc = (): void => {
    const sorted = [...restaurants].sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    setSortedRestaurants(sorted)
  }

  const sortDesc = (): void => {
    const sorted = [...restaurants].sort((a, b) => {
      return b.name.localeCompare(a.name)
    })
    setSortedRestaurants(sorted)
  }

  const sortDistAsc = (): void => {
    const sorted = [...restaurants].sort((a, b) => {
      return a.distance - b.distance
    })
    setSortedRestaurants(sorted)
  }

  const sortDistDesc = (): void => {
    const sorted = [...restaurants].sort((a, b) => {
      return b.distance - a.distance
    })
    setSortedRestaurants(sorted)
  }

  const username = localStorage.getItem('user_key') as string

  const onSubmit = (user: any, restaurant: any): any => {
    console.log(user, restaurant)
    createOne({
      user,
      restaurant,
    }).then(() => {
      console.log('Voted')
    })
  }

  return (
    <main className="mb-8">
      <div className="relative mt-6 max-w-md mx-auto">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
        </span>
        <input
          className="w-full border rounded-md pr-4 py-2
                   focus:border-gray-700 focus:outline-none focus:outline-none text-center"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={input}
        />
      </div>
      <div className="mt-6 max-w-md mx-auto flex justify-center">
        <p className="mr-2 rounded text-gray-600 px-2 py-1 w-20 focus:outline-none">Sort by:</p>
        <div className="flex space-x-8">
          <button
            onClick={sortAsc}
            className="rounded border border-gray-400 hover:border-gray-700 text-gray-600 hover:text-gray-900 px-2 py-1 w-16 focus:outline-none"
          >
            A-Z
          </button>
          <button
            onClick={sortDesc}
            className="rounded border border-gray-400 hover:border-gray-700 text-gray-600 hover:text-gray-900 px-2 py-1 w-16 focus:outline-none"
          >
            Z-A
          </button>
          <button
            onClick={sortDistAsc}
            className="rounded border border-gray-400 hover:border-gray-700 text-gray-600 hover:text-gray-900 px-2 py-1 w-16 focus:outline-none"
          >
            +
          </button>
          <button
            onClick={sortDistDesc}
            className="rounded border border-gray-400 hover:border-gray-700 text-gray-600 hover:text-gray-900 px-2 py-1 w-16 focus:outline-none"
          >
            -
          </button>
        </div>
      </div>
      <div className="mt-4 mb-6 max-w-md mx-auto flex justify-center">
        <p className="mr-2 rounded text-gray-600 px-2 py-1 w-20 focus:outline-none">Range:</p>
        <input type="range" list="marks" value={value} min="0" max="3" step="0.25" onChange={handleSlide} />
        <datalist id="marks">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </datalist>
      </div>
      <div className="container mx-auto px-6 pt-8">
        <h3 className="text-gray-700 text-3xl font-bold cursor-default">Places</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {sortedRestaurants.map((restaurant) => (
            <div
              className="w-full max-w-sm mx-auto rounded-md shadow-md
                                     overflow-hidden bg-gray-200"
              key={restaurant.id}
            >
              <div
                className="flex items-end justify-end h-56 w-full bg-contain
                                         bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${restaurant.image})` }}
              >
                <VotingButton onClick={(): any => onSubmit(username, restaurant.name)} />
              </div>
              <div className="px-5 py-3 bg-white">
                <h3 className="text-gray-700 font-bold cursor-default">{restaurant.name}</h3>
                <span className="text-gray-500 mt-2 cursor-default">
                  {restaurant.phone}
                  <br />
                </span>
                <span className="text-gray-500 mt-2 cursor-default">{restaurant.distance} km</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Menu />
    </main>
  )
}

export default Card

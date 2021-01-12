import React from 'react'
import Title from './Title'

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <div className="container mx-auto px-6 py-3">
        <Title />
      </div>
    </header>
  )
}

export default Header

import React from 'react'
import '../App.css'
import Header from '../components/Header'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Main: React.FunctionComponent = () => {
  return (
    <div className="bg-white">
      <Header />

      <Card />

      <Footer />
    </div>
  )
}

export default Main

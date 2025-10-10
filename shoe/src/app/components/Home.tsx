import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Featured from './Featured'
import Product from './Product'
import TVCSection from './TVSection'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Featured />
      <Product />
      <TVCSection />
    </div>
  )
}

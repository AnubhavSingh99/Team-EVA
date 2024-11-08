import React from 'react'
import { Nav } from '../HomeComponents/Navbar'
import { Footer } from '../HomeComponents/footer'
import NegotiationComponent from '../HomeComponents/NegoComp'

function Nego() {
  return (
    <div>
        <Nav />
        <NegotiationComponent />
        <Footer/>
    </div>
  )
}

export default Nego
import React from 'react'
import { Nav } from '../HomeComponents/Navbar'
import { Footer } from '../HomeComponents/footer'
import CropList2 from '../CropsComponents/CropList2'

function CropsPage() {
  return (
    <div>
        <Nav/>
        <CropList2/>
        <Footer/>
    </div>
  )
}

export default CropsPage
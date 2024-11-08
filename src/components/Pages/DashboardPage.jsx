import React from 'react'
import FarmerDashboard from '../DashboardComponents/Dashboard'
import { Nav } from '../HomeComponents/Navbar'
import { Footer } from '../HomeComponents/footer'
import BuyerDashboard from '../DashboardComponents/BuyerDashboard'

function DashPage() {
  return (
    <div>
        <Nav />
        <FarmerDashboard />
        <BuyerDashboard/>
        <Footer/>
    </div>
  )
}

export default DashPage
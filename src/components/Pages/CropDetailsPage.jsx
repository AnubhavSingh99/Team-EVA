import CropDetails from '../HomeComponents/CropDetails';
import Charts from "../HomeComponents/Charts";
import { Nav } from '../HomeComponents/Navbar';
import { Footer } from '../HomeComponents/footer';
import FarmerProfile from '../HomeComponents/Charts2';

const CropDetailsPage = () => {
  return (
    <div>
      <Nav/>
      <CropDetails/>
      <Charts/>
      <FarmerProfile/>
      <Footer/>
    </div>
  )
}

export default CropDetailsPage

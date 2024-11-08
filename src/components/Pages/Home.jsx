import CropList from "../HomeComponents/CropList";
import Hero from "../HomeComponents/Hero";
import { Nav } from "../HomeComponents/Navbar";
import { Footer } from "../HomeComponents/footer";
import Trends from "../HomeComponents/MarketTrends";
import CropTicker from "../HomeComponents/Ticker";
import CropPriceTable from "../HomeComponents/PriceTable";

const Home = () => {
  return (
    <div>
      <Nav />
      <CropTicker/>
      <Hero />
      <CropList />
      <CropPriceTable />
      <Trends />
      <Footer />
    </div>
  );
};

export default Home;

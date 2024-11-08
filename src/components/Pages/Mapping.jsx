import { Footer } from "../HomeComponents/footer";
import { Nav } from "../HomeComponents/Navbar";
import IndiaCropPriceMap from "./GoogleMap";

const Mapping = () => {
  return (
    <div>
      <Nav />
      <IndiaCropPriceMap />
      <Footer />
    </div>
  );
};

export default Mapping;

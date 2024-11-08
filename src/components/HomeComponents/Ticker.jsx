import { motion } from "framer-motion";
import { 
  GiAppleSeeds,
  GiBanana,
  GiBowlOfRice,
  GiCabbage,
  GiCarrot,
  GiCoffeeBeans,
  GiGrapes,
  GiSugarCane,
  GiWheat,
} from "react-icons/gi";

const crops = [
  { name: "Wheat", Icon: GiWheat, price: "₹2000/quintal" },
  { name: "Sugarcane", Icon: GiSugarCane, price: "₹300/quintal" },
  { name: "Coffee", Icon: GiCoffeeBeans, price: "₹400/kg" },
  { name: "Grapes", Icon: GiGrapes, price: "₹80/kg" },
  { name: "Apples", Icon: GiAppleSeeds, price: "₹100/kg" },
  { name: "Carrots", Icon: GiCarrot, price: "₹40/kg" },
  { name: "Cabbage", Icon: GiCabbage, price: "₹30/kg" },
  { name: "Bananas", Icon: GiBanana, price: "₹50/dozen" },
  { name: "Rice", Icon: GiBowlOfRice, price: "₹3000/quintal" },
];

function CropTicker() {
  return (
    <div className="w-full py-3 bg-yellow-50">
      <div className="text-black border-t-2 border-b-2 border-zinc-200 flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex items-center"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 40 }}
          style={{ width: "200%" }}
        >
          {crops.concat(crops).map((crop, index) => (
            <div key={index} className="flex items-center mr-8">
              <crop.Icon className="w-8 h-10 mr-2" />
              <span className="text-2xl font-semibold mr-2">{crop.name}:</span>
              <span className="text-2xl">{crop.price}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CropTicker;

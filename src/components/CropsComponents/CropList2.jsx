import { MapPin, Star } from "lucide-react";
import wheat from "../../assets/HomeImg/wheat.jpg";
import sugarcane from "../../assets/HomeImg/sugarcane.jpg";
import maize from "../../assets/HomeImg/maize.jpg";
import millet from "../../assets/HomeImg/millet.jpg";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Nav } from "../HomeComponents/Navbar";
import { Footer } from "../HomeComponents/footer";

export const crops = [
  {
    id: 1,
    src: wheat,
    cropName: "Wheat",
    farmerName: "Kishar Kumar",
    farmerType: "Local Farmer",
    price: "Rs 23/kg",
    rating: 4,
    reviews: 20,
    location: "Bihar, India",
    state: "IN STOCK",
    description: "Wheat is a staple grain used worldwide. It's ground into flour for bread, pasta, and other baked goods. Wheat is a significant source of carbohydrates and proteins.",
    uses: [
      "Baking: Used in bread, pastries, and other baked goods.",
      "Pasta: A key ingredient in pasta production.",
      "Animal Feed: Used as feed for livestock."
    ],
    nutritionalInfo: {
      Calories: "339 per 100 grams",
      Protein: "13.2 grams",
      Fat: "2.5 grams",
      Fiber: "12.2 grams"
    }
  },
  {
    id: 2,
    src: sugarcane,
    cropName: "Sugarcane",
    farmerName: "Ravi Kumar",
    farmerType: "Local Farmer",
    price: "Rs 3.4/kg",
    rating: 3,
    reviews: 10,
    location: "Uttar Pradesh, India",
    state: "LIMITED STOCK",
    description: "Sugarcane is a tropical plant known for its high sugar content. It's primarily used for producing sugar and ethanol. It also has uses in beverages and as fodder.",
    uses: [
      "Sugar Production: Extracted juice is used to produce sugar.",
      "Ethanol: Used in biofuel production.",
      "Beverages: Juice is used in drinks and syrups.",
      "Animal Feed: Provides fodder for livestock."
    ],
    nutritionalInfo: {
      Calories: "380 per 100 grams",
      Protein: "0.6 grams",
      Fat: "0.1 grams",
      Fiber: "0.6 grams"
    }
  },
  {
    id: 3,
    src: maize,
    cropName: "Maize",
    farmerName: "Anubhav Yadav",
    farmerType: "Local Farmer",
    price: "Rs 20/kg",
    rating: 4,
    reviews: 10,
    location: "Madhya Pradesh, India",
    state: "IN STOCK",
    description: "Maize, or corn, is a versatile crop used for food, livestock feed, and industrial products. It's a major source of carbohydrates and is used in various food products and beverages.",
    uses: [
      "Food Products: Used in tortillas, popcorn, and cereals.",
      "Animal Feed: A significant feed ingredient for livestock.",
      "Industrial Products: Used in biofuels, adhesives, and plastics."
    ],
    nutritionalInfo: {
      Calories: "365 per 100 grams",
      Protein: "9.4 grams",
      Fat: "4.7 grams",
      Fiber: "7.3 grams"
    }
  },
  {
    id: 4,
    src: millet,
    cropName: "Millet",
    farmerName: "Rampal Singh",
    farmerType: "Local Farmer",
    price: "Rs 20/kg",
    rating: 5,
    reviews: 10,
    location: "Punjab, India",
    state: "IN STOCK",
    description: "Millets are small, nutrient-dense grains that grow well in arid regions. They are used in a variety of traditional dishes and are known for their high mineral content.",
    uses: [
      "Food Products: Used in porridge, bread, and traditional dishes.",
      "Animal Feed: Used as feed for livestock.",
      "Beverages: Used to make alcoholic drinks like millet beer."
    ],
    nutritionalInfo: {
      Calories: "378 per 100 grams",
      Protein: "11 grams",
      Fat: "4.2 grams",
      Fiber: "8.5 grams"
    }
  },
  {
    id: 5,
    src: wheat,
    cropName: "Wheat",
    farmerName: "Suresh Patel",
    farmerType: "Organic Farmer",
    price: "Rs 25/kg",
    rating: 5,
    reviews: 30,
    location: "Gujarat, India",
    state: "IN STOCK",
    description: "Premium quality organic wheat, rich in nutrients and suitable for a variety of foods. Produced without synthetic fertilizers.",
    uses: [
      "Baking: High-quality flour for bread, cakes, and pastries.",
      "Chapati: Ideal for making soft and nutritious chapatis.",
      "Pasta: Can be ground for making pasta."
    ],
    nutritionalInfo: {
      Calories: "345 per 100 grams",
      Protein: "13.5 grams",
      Fat: "2.8 grams",
      Fiber: "12 grams"
    }
  },
  {
    id: 6,
    src: sugarcane,
    cropName: "Sugarcane",
    farmerName: "Vikram Singh",
    farmerType: "Local Farmer",
    price: "Rs 3.5/kg",
    rating: 4,
    reviews: 15,
    location: "Tamil Nadu, India",
    state: "LIMITED STOCK",
    description: "High-quality sugarcane from the fertile lands of Tamil Nadu, suitable for sugar production and ethanol manufacturing.",
    uses: [
      "Sugar: Essential for refined sugar production.",
      "Juice: Popular for fresh sugarcane juice beverages.",
      "Biofuel: Used in bioethanol production."
    ],
    nutritionalInfo: {
      Calories: "370 per 100 grams",
      Protein: "0.7 grams",
      Fat: "0.2 grams",
      Fiber: "0.5 grams"
    }
  },
  {
    id: 7,
    src: maize,
    cropName: "Maize",
    farmerName: "Dev Sharma",
    farmerType: "Commercial Farmer",
    price: "Rs 18/kg",
    rating: 3,
    reviews: 8,
    location: "Karnataka, India",
    state: "IN STOCK",
    description: "Maize is grown widely for both food and industrial purposes. It's rich in starch and a staple in various cuisines.",
    uses: [
      "Snacks: Used for popcorn, cornflakes, etc.",
      "Animal Feed: Widely used as feed for cattle and poultry.",
      "Industrial: Used in biofuel and other starch-based products."
    ],
    nutritionalInfo: {
      Calories: "360 per 100 grams",
      Protein: "9.1 grams",
      Fat: "4.5 grams",
      Fiber: "7.1 grams"
    }
  },
  {
    id: 8,
    src: millet,
    cropName: "Millet",
    farmerName: "Pooja Devi",
    farmerType: "Organic Farmer",
    price: "Rs 22/kg",
    rating: 5,
    reviews: 18,
    location: "Rajasthan, India",
    state: "IN STOCK",
    description: "Organic millet grown in Rajasthan, packed with nutrients. Millet is known for its drought resistance and high mineral content.",
    uses: [
      "Gluten-Free Products: Used in gluten-free breads and porridge.",
      "Animal Feed: Nutrient-rich feed for livestock.",
      "Beverages: Used in traditional millet-based drinks."
    ],
    nutritionalInfo: {
      Calories: "382 per 100 grams",
      Protein: "12 grams",
      Fat: "4.1 grams",
      Fiber: "8.8 grams"
    }
  }
];



function CropList2() {
  return (
    <>
      <Nav />
      <div className="bg-[#cdec73] ">
        <div className="text-4xl p-3 items-center flex justify-center ">
          <h1 className="text-4xl font-bold text-white border-black px-6 py-3 border-2 rounded-full shadow-lg bg-green-700 hover:text-white transition duration-300">
            Crop Listings
          </h1>
        </div>
        <div className="mx-auto grid w-full bg-[#cdec73] items-center gap-4 px-4 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {crops.map((crop) => (
            <div
              key={crop.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={crop.src}
                  alt={crop.cropName}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-md text-sm font-semibold">
                  {crop.state}
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-10 items-center justify-between ">
                  <h2 className="text-xl font-semibold ">{crop.cropName}</h2>
                  <Link
                    to={`/crop/${crop.id}`}
                    className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center"
                  >
                    View{" "}
                    <span className="ml-1 text-lg">
                      <BsArrowUpRightCircleFill />
                    </span>
                  </Link>
                </div>
                <div className="mt-4 border-t pt-4">
                  <h3 className="text-lg font-semibold text-green-600">
                    {crop.farmerName}
                  </h3>
                  <p className="text-sm text-gray-600">{crop.farmerType}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-semibold">{crop.price}</p>
                    <div className="flex items-center">
                      <div className="flex mr-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill={i < crop.rating ? "gold" : "none"}
                            stroke={i < crop.rating ? "gold" : "currentColor"}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({crop.reviews})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <MapPin size={16} className="mr-1" />
                    <span>{crop.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CropList2;

import { Link, useNavigate, useParams } from "react-router-dom";
import { crops } from "./CropList";
import { MapPin, Star, ArrowLeft, MessageCircle, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const CropDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showTooltip, setShowTooltip] = useState(false); // Tooltip state

  const crop = crops.find((c) => c.id === parseInt(id));
  const dispatch = useDispatch();

  if (!crop) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-10"
        role="alert"
      >
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline">
          Crop not found. Please try again.
        </span>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="mr-2" /> Back
        </button>
        <div className="text-4xl p-3 md:mr-[460px] items-center flex justify-center ">
          <h1 className="md:text-4xl text-xl font-bold text-white border-black px-6 md:py-3 py-3 border-2 rounded-full shadow-lg bg-green-700 hover:text-white transition duration-300">
            Crop Details
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={crop.src}
            alt={`${crop.cropName} image`}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">{crop.cropName}</h2>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {crop.state}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-green-600 mb-1">
              {crop.farmerName}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{crop.farmerType}</p>

            {/* Crop Type with Tooltip */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <p className="text-sm text-gray-600 italic mb-2 cursor-pointer">
                {crop.cropType}
              </p>
              {showTooltip && (
                <div className="absolute top-full left-0 bg-white text-black text-xs p-2 rounded shadow-lg w-48 z-10">
                  <p>{crop.cropType} is a widely cultivated crop known for its rich nutritional content and versatility. It is particularly significant in this region due to its economic and dietary importance.</p>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-lg">{crop.price}</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < crop.rating ? "gold" : "none"}
                    stroke={i < crop.rating ? "gold" : "currentColor"}
                  />
                ))}
                <span className="ml-1 text-sm text-gray-600">
                  ({crop.reviews})
                </span>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin size={16} className="mr-1" />
              <span>{crop.location}</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <button
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
                onClick={() => dispatch(addToCart({
                  id: crop.id,
                  cropName: crop.cropName,
                  src: crop.src,
                  price: crop.price
                }))}
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
              <Link
              to={"/negociate"}>
                <button
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Negotiate
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-semibold mb-4">
            {crop.cropName} Information
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p>{crop.description}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Uses</h3>
            <ul className="list-disc pl-5">
              {crop.uses.map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Crop Type</h3> {/* Added Crop Type */}
            <p>{crop.cropType}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Nutritional Information
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(crop.nutritionalInfo).map(([key, value]) => (
                <div key={key} className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-2 rounded">
                  <span className="font-semibold">{key}:</span> {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetails;

import  { useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const center = { lat: 20.5937, lng: 78.9629 }; // Center of India

const cropData = {
  wheat: {
    Punjab: {
      position: { lat: 31.1471, lng: 75.3412 },
      price: 2000,
      production: 17620,
    },
    Maharashtra: {
      position: { lat: 19.7515, lng: 75.7139 },
      price: 2200,
      production: 1290,
    },
    UttarPradesh: {
      position: { lat: 26.8467, lng: 80.9462 },
      price: 1900,
      production: 30060,
    },
    MadhyaPradesh: {
      position: { lat: 22.9734, lng: 78.6569 },
      price: 2100,
      production: 12990,
    },
    Haryana: {
      position: { lat: 29.0588, lng: 76.0856 },
      price: 2050,
      production: 11780,
    },
  },
  rice: {
    Punjab: {
      position: { lat: 31.1471, lng: 75.3412 },
      price: 1800,
      production: 11770,
    },
    Maharashtra: {
      position: { lat: 19.7515, lng: 75.7139 },
      price: 2000,
      production: 3340,
    },
    UttarPradesh: {
      position: { lat: 26.8467, lng: 80.9462 },
      price: 1750,
      production: 14460,
    },
    WestBengal: {
      position: { lat: 22.9868, lng: 87.855 },
      price: 1900,
      production: 15750,
    },
    AndhraPradesh: {
      position: { lat: 15.9129, lng: 79.74 },
      price: 1850,
      production: 13190,
    },
  },
  maize: {
    Karnataka: {
      position: { lat: 15.3173, lng: 75.7139 },
      price: 1850,
      production: 3270,
    },
    MadhyaPradesh: {
      position: { lat: 22.9734, lng: 78.6569 },
      price: 1800,
      production: 2050,
    },
    Bihar: {
      position: { lat: 25.0961, lng: 85.3131 },
      price: 1750,
      production: 2790,
    },
    TamilNadu: {
      position: { lat: 11.1271, lng: 78.6569 },
      price: 1900,
      production: 1740,
    },
    Maharashtra: {
      position: { lat: 19.7515, lng: 75.7139 },
      price: 1820,
      production: 2290,
    },
  },
  cotton: {
    Gujarat: {
      position: { lat: 22.2587, lng: 71.1924 },
      price: 6000,
      production: 8320,
    },
    Maharashtra: {
      position: { lat: 19.7515, lng: 75.7139 },
      price: 5800,
      production: 6590,
    },
    Telangana: {
      position: { lat: 18.1124, lng: 79.0193 },
      price: 5900,
      production: 5350,
    },
    Haryana: {
      position: { lat: 29.0588, lng: 76.0856 },
      price: 6100,
      production: 2510,
    },
    Punjab: {
      position: { lat: 31.1471, lng: 75.3412 },
      price: 6200,
      production: 2400,
    },
  },
  soybeans: {
    MadhyaPradesh: {
      position: { lat: 22.9734, lng: 78.6569 },
      price: 3800,
      production: 5920,
    },
    Maharashtra: {
      position: { lat: 19.7515, lng: 75.7139 },
      price: 3900,
      production: 4560,
    },
    Rajasthan: {
      position: { lat: 27.0238, lng: 74.2179 },
      price: 3750,
      production: 1130,
    },
    Karnataka: {
      position: { lat: 15.3173, lng: 75.7139 },
      price: 3850,
      production: 320,
    },
    Gujarat: {
      position: { lat: 22.2587, lng: 71.1924 },
      price: 3700,
      production: 130,
    },
  },
  groundnut: {
    Gujarat: {
      position: { lat: 22.2587, lng: 71.1924 },
      price: 5400,
      production: 3180,
    },
    Rajasthan: {
      position: { lat: 27.0238, lng: 74.2179 },
      price: 5300,
      production: 1670,
    },
    TamilNadu: {
      position: { lat: 11.1271, lng: 78.6569 },
      price: 5500,
      production: 960,
    },
    AndhraPradesh: {
      position: { lat: 15.9129, lng: 79.74 },
      price: 5450,
      production: 670,
    },
    Karnataka: {
      position: { lat: 15.3173, lng: 75.7139 },
      price: 5350,
      production: 500,
    },
  },
};

const getMarkerColor = (price, minPrice, maxPrice) => {
  const range = maxPrice - minPrice;
  const normalizedPrice = (price - minPrice) / range;
  if (normalizedPrice < 0.66) return "yellow";
  if (normalizedPrice < 0.33) return "green";
  return "red";
};

const PriceLegend = ({ minPrice, maxPrice }) => {
  const lowRangeEnd = Math.floor(minPrice + (maxPrice - minPrice) / 3);
  const midRangeStart = lowRangeEnd + 1;
  const midRangeEnd = Math.floor(minPrice + (2 * (maxPrice - minPrice)) / 3);
  const highRangeStart = midRangeEnd + 1;

  return (
    <div className="w-full max-w-md p-4 bg-white rounded shadow ">
      <h2 className="text-xl font-bold mb-2">Price Legend</h2>
      <h3 className="bg-gray-100 text-sm mb-2 -mt-2">
        (All prices are in ₹/quintal)
      </h3>
      <div className="flex items-center mb-1">
        <div className="w-4 h-4 bg-yellow-200 mr-2"></div>
        <span>
          Low Price Range: ₹{minPrice} - ₹{lowRangeEnd}
        </span>
      </div>
      <div className="flex items-center mb-1">
        <div className="w-4 h-4 bg-green-500 mr-2"></div>
        <span>
          Medium Price Range: ₹{midRangeStart} - ₹{midRangeEnd}
        </span>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-4 h-4 bg-red-500 mr-2"></div>
        <span>
          High Price Range: ₹{highRangeStart} - ₹{maxPrice}
        </span>
      </div>
    </div>
  );
};

const IndiaCropPriceMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [selectedCrop, setSelectedCrop] = useState("wheat");
  const [selectedState, setSelectedState] = useState(null);
  const [activeInfoWindow, setActiveInfoWindow] = useState(null);

  if (loadError) return <div>Error loading maps. Please try again later.</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  const currentCropData = cropData[selectedCrop];
  const prices = Object.values(currentCropData).map((item) => item.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <div>
      <h1 className="text-6xl  font-bold mb-4 justify-center flex">
        India Crop Price Map(State wise)
      </h1>
      <div className="flex flex-row items-center p-4">
        <div className="w-full h-[400px] mb-4">
          <GoogleMap
            center={center}
            zoom={5}
            mapContainerStyle={{ width: "80%", height: "100%" }}
          >
            {Object.entries(currentCropData).map(([state, data]) => (
              <Marker
                key={state}
                position={data.position}
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 8,
                  fillColor: getMarkerColor(data.price, minPrice, maxPrice),
                  fillOpacity: 1,
                  strokeWeight: 2,
                  strokeColor: "#ffffff",
                }}
                onClick={() => {
                  setSelectedState({ state, ...data });
                  setActiveInfoWindow(state);
                }}
              >
                {/* Render InfoWindow only if it matches the active state */}
                {activeInfoWindow === state && (
                  <InfoWindow onChange={() => setActiveInfoWindow(null)}>
                    <div>
                      <h3 className="font-bold">{state}</h3>
                      <p>Price: ₹{data.price}/quintal</p>
                      <p>Production: {data.production} thousand tonnes</p>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        </div>
        <div className="mb-4">
          <label htmlFor="crop-select" className="mr-2 text-xl">
            Select Crop:
          </label>
          <select
            id="crop-select"
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="p-2 border rounded"
          >
            {Object.keys(cropData).map((crop) => (
              <option key={crop} value={crop}>
                {crop.charAt(0).toUpperCase() + crop.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <PriceLegend minPrice={minPrice} maxPrice={maxPrice} />
        {selectedState && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Show Detailed State Info
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{selectedState.state}</AlertDialogTitle>
                <p>Crop: {selectedCrop}</p>
                <p>Price: ₹{selectedState.price}/quintal</p>
                <p>
                  Production: {selectedState.production} thousand tonnes(State
                  wise)
                </p>
                <p>Number of farmers: 100000</p>
              </AlertDialogHeader>
              <AlertDialogAction>Close</AlertDialogAction>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </div>
  );
};

IndiaCropPriceMap.displayName = "IndiaCropPriceMap";
PriceLegend.displayName = "PriceLegend";

export default IndiaCropPriceMap;

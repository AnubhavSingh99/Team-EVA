import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import { Select } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// This is a placeholder for the actual GeoJSON data of India
const INDIA_TOPO_JSON = '/api/placeholder/400/320';

// This is a placeholder for the actual crop price data
const CROP_DATA = {
  rice: {
    'Uttar Pradesh': 1800,
    Maharashtra: 2000,
    'West Bengal': 1900,
    // ... other states
  },
  wheat: {
    Punjab: 2200,
    Haryana: 2100,
    'Madhya Pradesh': 2000,
    // ... other states
  },
  // ... other crops
};

const CROPS = Object.keys(CROP_DATA);

const CropPriceMap = () => {
  const [selectedCrop, setSelectedCrop] = useState(CROPS[0]);

  const colorScale = scaleQuantile()
    .domain(Object.values(CROP_DATA[selectedCrop]))
    .range([
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#782618"
    ]);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Crop Prices in India</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select
            value={selectedCrop}
            onValueChange={(value) => setSelectedCrop(value)}
          >
            {CROPS.map((crop) => (
              <Select.Option key={crop} value={crop}>
                {crop.charAt(0).toUpperCase() + crop.slice(1)}
              </Select.Option>
            ))}
          </Select>
        </div>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 350,
            center: [78.9629, 22.5937]
          }}
          width={400}
          height={320}
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const current = CROP_DATA[selectedCrop][geo.properties.name];
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={current ? colorScale(current) : "#EEE"}
                    stroke="#FFF"
                    strokeWidth={0.5}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <div className="mt-4 text-sm">
          Prices are in INR per quintal
        </div>
      </CardContent>
    </Card>
  );
};

export default CropPriceMap;
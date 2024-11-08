import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
// Sample data for crop distribution
const cropDistributionData = [
  { name: 'Rice', value: 43.86 },
  { name: 'Wheat', value: 35.78 },
  { name: 'Pulses', value: 8.32 },
  { name: 'Coarse Cereals', value: 7.12 },
  { name: 'Oilseeds', value: 4.92 },
];

// Sample data for crop production
const cropProductionData = [
  { crop: 'Rice', production: 118.43, area: 44.00 },
  { crop: 'Wheat', production: 107.59, area: 30.97 },
  { crop: 'Maize', production: 27.71, area: 9.17 },
  { crop: 'Pulses', production: 23.01, area: 29.99 },
  { crop: 'Oilseeds', production: 33.22, area: 26.73 },
];

const cropProductionDatabar = [
  { year: '2019', Rice: 118.43, Wheat: 103.60, Maize: 27.72, Pulses: 23.01, Oilseeds: 32.26 },
  { year: '2020', Rice: 120.32, Wheat: 107.86, Maize: 28.64, Pulses: 23.57, Oilseeds: 33.22 },
  { year: '2021', Rice: 122.27, Wheat: 109.59, Maize: 31.65, Pulses: 25.46, Oilseeds: 35.95 },
  { year: '2022', Rice: 123.85, Wheat: 111.32, Maize: 33.73, Pulses: 26.98, Oilseeds: 37.70 },
];

const cropQualityData = [
  { attribute: 'Protein Content', Rice: 7, Wheat: 12, Maize: 9, Pulses: 24, Oilseeds: 20 },
  { attribute: 'Fiber', Rice: 1, Wheat: 12, Maize: 7, Pulses: 25, Oilseeds: 9 },
  { attribute: 'Minerals', Rice: 3, Wheat: 5, Maize: 6, Pulses: 10, Oilseeds: 15 },
  { attribute: 'Vitamins', Rice: 2, Wheat: 3, Maize: 5, Pulses: 8, Oilseeds: 12 },
  { attribute: 'Antioxidants', Rice: 4, Wheat: 6, Maize: 8, Pulses: 15, Oilseeds: 18 },
];


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const Trends = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow mt-5">
      <h2 className="text-5xl font-bold mb-4">India Crop Statistics</h2>

      {/* Pie Chart */}
      <div className="mb-8 bg-gray-50 pb-10">
        <h3 className="text-xl font-semibold mb-2 p-3 ">Crop Distribution in India</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={cropDistributionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {cropDistributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="md:text-4xl font-semibold mb-4 text-gray-700">Crop Production Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cropProductionDatabar}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Rice" fill="#FF6B6B" />
            <Bar dataKey="Wheat" fill="#4ECDC4" />
            <Bar dataKey="Maize" fill="#45B7D1" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div>
        <h3 className="md:text-4xl font-semibold mb-2">Crop Production Statistics</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full ">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Crop</th>
                <th className="px-4 py-2 text-left">Production (Million Tonnes)</th>
                <th className="px-4 py-2 text-left">Area (Million Hectares)</th>
              </tr>
            </thead>
            <tbody>
              {cropProductionData.map((crop, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="px-4 py-2">{crop.crop}</td>
                  <td className="px-4 py-2">{crop.production}</td>
                  <td className="px-4 py-2">{crop.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trends;
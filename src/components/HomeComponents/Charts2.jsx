import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const performanceData = [
  { year: 2021, yield: 3.2, quality: 4.5 },
  { year: 2022, yield: 3.5, quality: 4.7 },
  { year: 2023, yield: 3.8, quality: 4.8 },
];

const soilData = [
  { name: "Nitrogen", value: 30 },
  { name: "Phosphorus", value: 25 },
  { name: "Potassium", value: 20 },
  { name: "Organic Matter", value: 15 },
  { name: "Other Nutrients", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const FarmerProfile = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-6xl font-bold mb-6">Farmer Profile</h2>

      <div className="mb-8  bg-yellow-50">
        <h3 className="text-4xl font-semibold mb-4 bg-green-800 text-white p-3 rounded-md ">
          Previous Crop Performance
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="yield"
              fill="#8884d8"
              name="Yield (tons/acre)"
            />
            <Bar
              yAxisId="right"
              dataKey="quality"
              fill="#82ca9d"
              name="Quality Rating"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Soil Analysis Section */}
      <div className="bg-yellow-50 pb-20 ">
        <h3 className="text-4xl bg-green-800 p-3 rounded-md text-white font-semibold ">
          Soil Composition Analysis
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={soilData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {soilData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
          <div className="w-[50vh]">
            <h1 className="md:text-lg font-bold bg-blue-900 text-white md:p-4 mt-4 p-2 rounded-lg ">
            ✅ The soil is suitable for wheat growth.
            </h1>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FarmerProfile;

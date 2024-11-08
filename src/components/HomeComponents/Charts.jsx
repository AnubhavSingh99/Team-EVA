import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2019", price: 4.5 },
  { year: "2020", price: 5.1 },
  { year: "2021", price: 6.2 },
  { year: "2022", price: 7.8 },
  { year: "2023", price: 6.9 },
];

const Charts = () => {
  return (
    <div className="bg-amber-50 p-4 rounded-lg shadow">
      <h2 className="text-4xl ml-10 font-bold mb-4">Crop Price Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;

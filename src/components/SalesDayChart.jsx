import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { dia: "01", ventas: 1200 },
  { dia: "02", ventas: 2100 },
  { dia: "03", ventas: 800 },
  { dia: "04", ventas: 1600 },
  { dia: "05", ventas: 900 },
];

const SalesDayChart = () => (
  <div style={{ width: "100%", height: 300, marginTop: '40px' }}>
    <h3>Ventas por día</h3>
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dia" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="ventas"
          stroke="#4F46E5"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default SalesDayChart;
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { categoria: "Electrónica", ventas: 4000 },
  { categoria: "Ropa", ventas: 2400 },
  { categoria: "Alimentos", ventas: 3200 },
];

const CategorySalesChart = () => (
  <div style={{ width: "100%", height: 300, marginTop: '40px' }}>
    <h3>Ventas por categoría</h3>
    <ResponsiveContainer>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="categoria" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="ventas" fill="#10B981" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default CategorySalesChart;
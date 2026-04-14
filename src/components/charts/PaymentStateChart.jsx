import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Pagado", value: 5000 },
  { name: "Pendiente", value: 2000 },
  { name: "Vencido", value: 1000 },
];

const COLORS = ["#22C55E", "#F59E0B", "#EF4444"];

const PaymentStateChart = () => (
  <div style={{ width: "100%", height: 300, marginTop: '40px' }}>
    <h3>Estado de pagos</h3>
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={3}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default PaymentStateChart;
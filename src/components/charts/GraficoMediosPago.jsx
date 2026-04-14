import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA66CC"];

const GraficoMediosPago = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 300, marginTop: '40px' }}>
      <h5>Medios de Pago</h5>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="monto"
            nameKey="metodo"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip formatter={(value) => `$${value}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoMediosPago;
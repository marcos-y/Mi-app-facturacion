import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const GraficoTopProductos = ({ data }) => {
  // Ordenamos de mayor a menor (importante para ranking)
  const sortedData = [...data].sort((a, b) => b.cantidad - a.cantidad);

  return (
    <div style={{ width: "100%", height: 350, marginTop: '40px' }}>
      <h5>Top Productos</h5>

      <ResponsiveContainer>
        <BarChart
          data={sortedData}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" />
          <YAxis
            type="category"
            dataKey="nombre"
            width={120}
          />

          <Tooltip
            formatter={(value) => `${value} unidades`}
          />

          <Bar
            dataKey="cantidad"
            fill="#00C49F"
            radius={[0, 6, 6, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoTopProductos;
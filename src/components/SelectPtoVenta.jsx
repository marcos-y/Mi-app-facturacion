const PtoVta = [
  { value: "1", label: "0001" },
  { value: "2", label: "0002" },
  { value: "3", label: "0003" },
  { value: "4", label: "0004" }
];

const SelectorFormaPago = ({ value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label htmlFor="Puntos de Venta">Puntos de Venta</label>

      <select
        id="formaPago"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      >
        <option value="">Seleccionar punto de venta...</option>

        {PtoVta.map((forma) => (
          <option key={forma.value} value={forma.value}>
            {forma.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorFormaPago;
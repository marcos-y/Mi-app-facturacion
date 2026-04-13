const FechaEntrega = ({ value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label>Fecha de entrega</label>

      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      />
    </div>
  );
};

export default FechaEntrega;
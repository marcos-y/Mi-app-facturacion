const CampoObservaciones = ({ value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label>Observaciones</label>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        placeholder="Agregar observaciones..."
        style={{
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          resize: "vertical"
        }}
      />
    </div>
  );
};

export default CampoObservaciones;
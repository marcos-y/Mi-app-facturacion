const SelectCliente = ({ value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label htmlFor="clienteTipo">Tipo de cliente</label>

      <select
        id="clienteTipo"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      >
        <option value="">Seleccionar...</option>
        <option value="consumidor_final">Consumidor Final</option>
        <option value="cliente_existente">Cliente Existente</option>
      </select>
    </div>
  );
};

export default SelectCliente;
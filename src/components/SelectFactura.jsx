const SelectorFactura = ({ facturas = [], value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label>Tipo De Factura</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
      >
        <option value="">Seleccionar Tipo Factura...</option>

        {facturas.map((v) => (
          <option key={v.id} value={v.id}>
            {v.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorFactura;
const Selector= ({ label, title, options = [], value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label>{label}</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
      >
        <option value="">{title}</option>

        {options.map((v) => (
          <option key={v.id} value={v.id}>
            {v.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
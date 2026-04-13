const formasPago = [
  { value: "efectivo", label: "Efectivo" },
  { value: "debito", label: "Tarjeta de Débito" },
  { value: "credito", label: "Tarjeta de Crédito" },
  { value: "transferencia", label: "Transferencia" },
  { value: "billetera", label: "Billetera Virtual" },
  { value: "cuenta_corriente", label: "Cuenta Corriente" }
];

const SelectorFormaPago = ({ value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label htmlFor="formaPago">Forma de pago</label>

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
        <option value="">Seleccionar forma de pago...</option>

        {formasPago.map((forma) => (
          <option key={forma.value} value={forma.value}>
            {forma.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorFormaPago;
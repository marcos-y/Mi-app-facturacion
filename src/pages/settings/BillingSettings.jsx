import { useState } from "react";

const BillingSettings = () => {
  const [prefix, setPrefix] = useState("0001");
  const [autoNumber, setAutoNumber] = useState(true);

  return (
    <div>
      <h2>Configuración de Facturación</h2>

      <label>Prefijo de factura</label>
      <input value={prefix} onChange={(e) => setPrefix(e.target.value)} />

      <label>
        <input
          type="checkbox"
          checked={autoNumber}
          onChange={() => setAutoNumber(!autoNumber)}
        />
        Numeración automática
      </label>

      <button>Guardar</button>
    </div>
  );
};

export default BillingSettings;
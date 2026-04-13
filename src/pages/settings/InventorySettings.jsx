import { useState } from "react";

const InventorySettings = () => {
  const [controlStock, setControlStock] = useState(true);
  const [allowNegative, setAllowNegative] = useState(false);

  return (
    <div>
      <h2>Configuración de Inventario</h2>

      <label>
        <input
          type="checkbox"
          checked={controlStock}
          onChange={() => setControlStock(!controlStock)}
        />
        Controlar stock
      </label>

      <label>
        <input
          type="checkbox"
          checked={allowNegative}
          onChange={() => setAllowNegative(!allowNegative)}
        />
        Permitir stock negativo
      </label>

      <button>Guardar</button>
    </div>
  );
};

export default InventorySettings;
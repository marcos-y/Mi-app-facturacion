import { useState } from "react";
import Button from "../../components/ui/Button";

const InventorySettings = () => {

  const [controlStock, setControlStock] = useState(true);
  const [allowNegative, setAllowNegative] = useState(false);

  return (
    <div style={{  maxWidth: '500px', marginTop: '20px' }}>
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

      <Button type='primary' text="Guardar"/>
    </div>
  );
};

export default InventorySettings;
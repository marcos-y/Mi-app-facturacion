import { useState } from "react";

const NotificationSettings = () => {
  const [stockAlert, setStockAlert] = useState(true);
  const [salesAlert, setSalesAlert] = useState(false);

  return (
    <div>
      <h2>Notificaciones</h2>

      <label>
        <input
          type="checkbox"
          checked={stockAlert}
          onChange={() => setStockAlert(!stockAlert)}
        />
        Alerta de stock bajo
      </label>

      <label>
        <input
          type="checkbox"
          checked={salesAlert}
          onChange={() => setSalesAlert(!salesAlert)}
        />
        Notificación de ventas
      </label>

      <button>Guardar</button>
    </div>
  );
};

export default NotificationSettings;
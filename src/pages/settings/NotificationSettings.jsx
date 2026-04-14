import { useState } from "react";
import Button from "../../components/ui/Button";

const NotificationSettings = () => {

  const [stockAlert, setStockAlert] = useState(true);
  const [salesAlert, setSalesAlert] = useState(false);

  return (
    <div style={{  maxWidth: '500px', marginTop: '20px' }}>
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

      <Button type='primary' text="Guardar"/>
    </div>
  );
};

export default NotificationSettings;
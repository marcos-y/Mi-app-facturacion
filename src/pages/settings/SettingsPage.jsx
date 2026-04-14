import { useState } from "react";
import CompanySettings from "./CompanySettings";
import UserSettings from "./UserSettings";
import TaxSettings from "./TaxSettings";
import BillingSettings from "./BillingSettings";
import InventorySettings from "./InventorySettings";
import NotificationSettings from "./NotificationSettings";
import IntegrationSettings from "./IntegrationSettings";
import Button from "../../components/ui/Button";

const SettingsPage = () => {

  const [section, setSection] = useState("company");

  const renderSection = () => {
    switch (section) {
      case "company":
        return <CompanySettings />;
      case "users":
        return <UserSettings />;
      case "tax":
        return <TaxSettings />;
      case "billing":
        return <BillingSettings />;
      case "inventory":
        return <InventorySettings />;
      case "notifications":
        return <NotificationSettings />;
      case "integrations":
        return <IntegrationSettings />;
      default:
        return null;
    }
  };

  return (
    <div style={{ marginLeft: '220px' }}>
      <div>
        <h3>Settings</h3>

        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '900px' }}>
          <Button type='success' text="Empresa" onClick={() => setSection("company")}></Button>
          <Button type='success' text="Usuarios" onClick={() => setSection("users")}></Button>
          <Button type='success' text="Impuestos" onClick={() => setSection("tax")}></Button>
          <Button type='success' text="Facturación" onClick={() => setSection("billing")}></Button>
          <Button type='success' text="Inventario" onClick={() => setSection("inventory")}></Button>
          <Button type='success' text="Notificaciones" onClick={() => setSection("notifications")}></Button>
          <Button type='success' text="Integraciones" onClick={() => setSection("integrations")}></Button>
        </div>
      </div>

      <div style={{ flex: 1 }}>{renderSection()}</div>
    </div>
  );
};

export default SettingsPage;
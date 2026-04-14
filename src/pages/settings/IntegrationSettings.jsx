import Button from "../../components/ui/Button";

const IntegrationSettings = () => {
  return (
    <>
      <div style={{ maxWidth: '700px', marginTop: '20px' }}>
        <h2>Integraciones</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '700px' }}>
          <Button type='primary' text="Conectar MercadoPago" />
          <Button type='primary' text="Conectar API" />
          <Button type='primary' text="Conectar ARCA" />
          <Button type='primary' text="Webhook" />
        </div>
      </div>
    </>
  );
};

export default IntegrationSettings;
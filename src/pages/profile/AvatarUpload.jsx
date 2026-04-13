const ActivityLog = () => {
    
  const logs = [
    "Creó factura #123",
    "Editó cliente Juan Perez",
    "Agregó producto Mouse"
  ];

  return (
    <div>
      <h2>Actividad reciente</h2>

      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
const TaxSettings = () => {
  const taxes = [
    { id: 1, name: "IVA 21%", rate: 21 },
    { id: 2, name: "IVA 10.5%", rate: 10.5 }
  ];

  return (
    <div>
      <h2>Impuestos</h2>

      <button>Agregar impuesto</button>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Porcentaje</th>
          </tr>
        </thead>

        <tbody>
          {taxes.map((tax) => (
            <tr key={tax.id}>
              <td>{tax.name}</td>
              <td>{tax.rate}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxSettings;
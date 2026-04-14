import Button from "../../components/ui/Button";

const TaxSettings = () => {

  const taxes = [
    { id: 1, name: "IVA 21%", rate: 21 },
    { id: 2, name: "IVA 10.5%", rate: 10.5 }
  ];

  return (
    <div style={{ maxWidth: '500px', marginTop: '20px' }}>
      <h2>Impuestos</h2>

      <Button type='primary' text="Agregar impuesto"/>

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
import Table from "../components/ui/Table";

const Reports = () => {

  const columns = [
    { header: "Fecha", accessor: "fecha" },
    { header: "Factura", accessor: "factura" },
    { header: "Cliente", accessor: "cliente" },
    { header: "Vendedor", accessor: "vendedor" },
    { header: "Total", accessor: "total" },
  ];

  const data = [{
    fecha: "10/03",
    factura: "0001-0000123",
    cliente: "Juan Perez",
    vendedor: "Maria",
    total: "$12000"
  },
  {
    fecha: "10/03",
    factura: "0001-0000123",
    cliente: "Juan Perez",
    vendedor: "Maria",
    total: "$12000"
  },
  {
    fecha: "10/03",
    factura: "0001-0000123",
    cliente: "Juan Perez",
    vendedor: "Maria",
    total: "$12000"
  },
  {
    fecha: "10/03",
    factura: "0001-0000123",
    cliente: "Juan Perez",
    vendedor: "Maria",
    total: "$12000"
  }];

  /*
  --Ejemplos--
  💡 Tip importante para tu sistema
     Los reportes más usados en la práctica son:
    1 Ventas por período
    2 Productos más vendidos
    3 Stock bajo
    4 Ventas por forma de pago
    5 Ventas por vendedor
    Con solo esos ya cubrís el 80% de las necesidades reales
  */

  return (
    <div style={{ marginLeft: '220px' }}>
      <h1>Reportes</h1>
      <h5>1 Ventas por período</h5>
      <h5>2 Productos más vendidos</h5>
      <h5>3 Stock bajo</h5>
      <h5>4 Ventas por forma de pago</h5>
      <h5>5 Ventas por vendedor</h5>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Reports;
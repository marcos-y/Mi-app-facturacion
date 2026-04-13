import { useState } from "react";
import Button from "../components/Button";
import Table from "../components/Table";
import Modal from "../components/Modal";
import NuevaFactura from "../components/NuevaFactura";

const Invoices = () => {

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleClick = (props) => {
    setOpenModal(true)
    setModalData(props)
  };

  const columns = [
    { header: "Nro. Factura", accessor: "nroFactura" },
    { header: "Cliente", accessor: "cliente" },
    { header: "Fecha", accessor: "fecha" },
    { header: "Total", accessor: "total" },
    { header: "Estado", accessor: "estado" },
    {
      header: "Acciones",
      accessor: "actions",
      render: (_, row) => (
        <Button type="primary" text='ver' onClick={() => handleClick([row.nroFactura, row.cliente, row.fecha, row.total, row.estado])} />
      )
    }
  ];

  const data = [
    {
      id: 1,
      nroFactura: "INV-001",
      cliente: "Juan Pérez",
      fecha: "2026-03-01",
      total: 1200,
      estado: "Pagada",
      acciones: "ver"
    },
    {
      id: 2,
      nroFactura: "INV-002",
      cliente: "María López",
      fecha: "2026-03-02",
      total: 850,
      estado: "Pendiente",
      acciones: "ver"
    },
    {
      id: 3,
      nroFactura: "INV-003",
      cliente: "Carlos Gómez",
      fecha: "2026-03-02",
      total: 640,
      estado: "Pagada",
      acciones: "ver"
    },
    {
      id: 4,
      nroFactura: "INV-004",
      cliente: "Ana Martínez",
      fecha: "2026-03-03",
      total: 230,
      estado: "Pendiente",
      acciones: "ver"
    },
    {
      id: 5,
      nroFactura: "INV-005",
      cliente: "Pedro Sánchez",
      fecha: "2026-03-04",
      total: 1780,
      estado: "Pagada",
      acciones: "ver"
    },
    {
      id: 6,
      nroFactura: "INV-006",
      cliente: "Laura Díaz",
      fecha: "2026-03-04",
      total: 410,
      estado: "Vencida",
      acciones: "ver"
    },
    {
      id: 7,
      nroFactura: "INV-007",
      cliente: "Diego Fernández",
      fecha: "2026-03-05",
      total: 990,
      estado: "Pagada",
      acciones: "ver"
    },
    {
      id: 8,
      nroFactura: "INV-008",
      cliente: "Sofía Ramírez",
      fecha: "2026-03-05",
      total: 720,
      estado: "Pendiente",
      acciones: "ver"
    },
    {
      id: 9,
      nroFactura: "INV-009",
      cliente: "Martín Torres",
      fecha: "2026-03-06",
      total: 1340,
      estado: "Pagada",
      acciones: "ver"
    },
    {
      id: 10,
      nroFactura: "INV-010",
      cliente: "Lucía Herrera",
      fecha: "2026-03-06",
      total: 560,
      estado: "Pendiente",
      acciones: "ver"
    },
    {
      id: 11,
      nroFactura: "INV-011",
      cliente: "Andrés Castro",
      fecha: "2026-03-07",
      total: 2450,
      estado: "Pagada",
      acciones: "ver"
    },
    {
      id: 12,
      nroFactura: "INV-012",
      cliente: "Valentina Rojas",
      fecha: "2026-03-07",
      total: 390,
      estado: "Vencida",
      acciones: "ver"
    },
    {
      id: 13,
      nroFactura: "INV-013",
      cliente: "Fernando Vega",
      fecha: "2026-03-08",
      total: 880,
      estado: "Pagada",
      acciones: "ver"
    },
    {
      id: 14,
      nroFactura: "INV-014",
      cliente: "Gabriela Núñez",
      fecha: "2026-03-08",
      total: 620,
      estado: "Pendiente",
      acciones: "ver"
    },
    {
      id: 15,
      nroFactura: "INV-015",
      cliente: "Ricardo Molina",
      fecha: "2026-03-09",
      total: 1500,
      estado: "Pagada",
      acciones: "ver"
    }
  ];

  /************ FACTURACION ************/

  const TAX_RATE = 0.21; // 21% de impuestos

  const [selectedClient, setSelectedClient] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [status, setStatus] = useState("Pendiente");

  // Agregar un producto a la factura
  const addProduct = (product) => {
    setSelectedProducts([
      ...selectedProducts,
      { ...product, quantity: 1, total: product.precio },
    ]);
  };

  // Actualizar cantidad y recalcular total
  const updateQuantity = (index, quantity) => {
    const updated = [...selectedProducts];
    updated[index].quantity = quantity;
    updated[index].total = quantity * updated[index].precio;
    setSelectedProducts(updated);
  };

  const subtotal = selectedProducts.reduce((acc, p) => acc + p.total, 0);
  const taxes = subtotal * TAX_RATE;
  const total = subtotal + taxes;

  const handleSubmit = (e) => {

    e.preventDefault();

    //El Modal no sabe cómo ni dónde guardar los datos, por eso onSave viene desde el componente padre (Invoices.jsx). Ahí es donde se actualiza el estado de la lista de facturas:
    //const handleSave = (newInvoice) => {
    //setInvoices([...invoices, { id: invoices.length + 1, ...newInvoice }]);
    //};

    /*onSave({
      nroFactura: `INV-${Math.floor(Math.random() * 1000).toString().padStart(3, "0")}`,
      cliente: selectedClient,
      fecha: new Date().toISOString().split("T")[0],
      total,
      estado: status,
      productos: selectedProducts,
    });*/

    // Limpiar formulario
    setSelectedClient("");
    setSelectedProducts([]);
    setStatus("Pendiente");
    //onClose();
  };

  /**********************************/

  return (
    <div style={{ marginLeft: '220px' }}>
      <h1>Facturas</h1>
      <h5>Administra todas las facturas de tu negocio.</h5>
      <h5>Facturas totales: 120</h5>
      <h5>Facturas pagadas: 90</h5>
      <h5>Facturas pendientes: 20</h5>
      <h5>Facturas vencidas: 10</h5>
      <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', maxWidth: '720px' }}>
        <Button type="success" onClick={() => setOpenModal2(true)} text='Nueva Factura' />
        <Button type="success" text='Exportar a Excel' />
        <Button type="success" text='Exportar a CSV' />
        <Button type="success" text='Exportar a PDF' />
        <Button type="success" text='Filtrar' />
      </div>
      <Table columns={columns} data={data} />
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title="Factura" children={modalData} />
      <Modal
        isOpen={openModal2}
        onClose={() => setOpenModal2(false)}
        title="Nueva Factura"
      >
        <NuevaFactura />
      </Modal>

      {/*<Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Crear Factura"
      >
        <form>
          <input placeholder="Cliente" />
          <input placeholder="Fecha" />
          <input placeholder="Nro. de factura" />
          <button type="submit">Guardar</button>
        </form>
      </Modal>
      */}
    </div>
  );
};

export default Invoices;
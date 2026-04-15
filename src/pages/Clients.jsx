import { useState } from "react";
import { exportExcel } from "../utils/exportExcel";
import { exportPDF } from "../utils/exportPDF";
import { exportCSV } from "../utils/exportCSV";
import { arrayToCSV } from "../utils/exportCSV";
import Icon from "../components/ui/Icon";
import Button from '../components/ui/Button';
import Table from "../components/ui/Table";
import Card from "../components/ui/Card";
import client from '../assets/client.png';
import Badge from "../components/ui/Badge";
import Modal from "../components/ui/Modal";
import NuevoCliente from "../components/NuevoCliente";

const Clients = () => {

  /*
  🟢 Activo
  🔴 Inactivo
  */

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const [modalData, setModalData] = useState([]);

  const handleClick = (props) => {
    setOpenModal(true)
    setModalData(props)
  };

  const columns = [
    { header: "Nombre", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Telefono", accessor: "phone" },
    { header: "Empresa", accessor: "company" },
    { header: "Ultima Factura", accessor: "lastInvoice" },
    { header: "Total facturado", accessor: "totalBilled" },
    { header: "Fecha Vto.", accessor: "dueDate" },
    { header: "Método Pago", accessor: "paymentMethod", },
    { header: "Moneda", accessor: "currency", },
    {
      header: "Estado",
      accessor: "status",
      render: (_, row) => (
        <Badge isActive={row.status} text={row.status} />
      )
    },
    {
      header: "Acciones",
      accessor: "actions",
      render: (_, row) => (
        <Button type="primary" text='ver' onClick={() => handleClick([row.name, row.email, row.phone, row.company, row.lastInvoice])} />
      )
    }
  ];

  const data = [
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan.perez@email.com",
      phone: "+54 381 4001001",
      company: "JP Servicios",
      lastInvoice: "2026-03-02",
      totalBilled: 125000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 2,
      name: "María López",
      email: "maria.lopez@email.com",
      phone: "+54 381 4001002",
      company: "ML Distribuciones",
      lastInvoice: "2026-03-04",
      totalBilled: 87000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 3,
      name: "Carlos Gómez",
      email: "carlos.gomez@email.com",
      phone: "+54 381 4001003",
      company: "CG Tech",
      lastInvoice: "2026-02-28",
      totalBilled: 210000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 4,
      name: "Ana Martínez",
      email: "ana.martinez@email.com",
      phone: "+54 381 4001004",
      company: "AM Consultora",
      lastInvoice: "2026-03-01",
      totalBilled: 54000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 5,
      name: "Pedro Sánchez",
      email: "pedro.sanchez@email.com",
      phone: "+54 381 4001005",
      company: "PS Construcciones",
      lastInvoice: "2026-03-03",
      totalBilled: 315000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 6,
      name: "Laura Díaz",
      email: "laura.diaz@email.com",
      phone: "+54 381 4001006",
      company: "LD Marketing",
      lastInvoice: "2026-02-25",
      totalBilled: 92000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 7,
      name: "Diego Fernández",
      email: "diego.fernandez@email.com",
      phone: "+54 381 4001007",
      company: "DF Logística",
      lastInvoice: "2026-03-05",
      totalBilled: 178000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 8,
      name: "Sofía Ramírez",
      email: "sofia.ramirez@email.com",
      phone: "+54 381 4001008",
      company: "SR Diseño",
      lastInvoice: "2026-02-27",
      totalBilled: 64000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 9,
      name: "Martín Torres",
      email: "martin.torres@email.com",
      phone: "+54 381 4001009",
      company: "MT Solutions",
      lastInvoice: "2026-03-06",
      totalBilled: 142000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 10,
      name: "Lucía Herrera",
      email: "lucia.herrera@email.com",
      phone: "+54 381 4001010",
      company: "LH Eventos",
      lastInvoice: "2026-02-20",
      totalBilled: 76000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 11,
      name: "Andrés Castro",
      email: "andres.castro@email.com",
      phone: "+54 381 4001011",
      company: "AC Ingeniería",
      lastInvoice: "2026-03-01",
      totalBilled: 198000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 12,
      name: "Valentina Rojas",
      email: "valentina.rojas@email.com",
      phone: "+54 381 4001012",
      company: "VR Studio",
      lastInvoice: "2026-03-07",
      totalBilled: 88000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 13,
      name: "Fernando Vega",
      email: "fernando.vega@email.com",
      phone: "+54 381 4001013",
      company: "FV Importaciones",
      lastInvoice: "2026-02-26",
      totalBilled: 245000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 14,
      name: "Gabriela Núñez",
      email: "gabriela.nunez@email.com",
      phone: "+54 381 4001014",
      company: "GN Consultores",
      lastInvoice: "2026-03-03",
      totalBilled: 97000,
      status: "active",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    },
    {
      id: 15,
      name: "Ricardo Molina",
      email: "ricardo.molina@email.com",
      phone: "+54 381 4001015",
      company: "RM Servicios",
      lastInvoice: "2026-02-24",
      totalBilled: 134000,
      status: "inactive",
      paymentStatus: "paid",
      dueDate: "2026-03-15",
      paymentMethod: "Transferencia",
      currency: "USD"
    }
  ];

  /* Descarga Excel */
  const handleClickDownload = (data) => {

    exportExcel(data)

  };

  /* Descarga Csv */
  const handleClickDownloadCSV = (data) => {

    const csv = arrayToCSV(data);

    exportCSV(csv)

  }

  /* Descarga Pdf */
  const handleClickDownloadPDF = (data) => {

    exportPDF(data)

  };

  /*
  const data2 = [{
    "header": {
      "name": "Juan Pérez",
      "company_name": "Mi Empresa SRL",
      "doc_number": "DNI 12345678 / CUIT 30-12345678-9",
      "tax_condition": "Consumidor Final",
      "status": "Activo"
    },
    "contact": {
      "primary_email": "juan.perez@mail.com",
      "primary_phone": "+54 11 1234-5678",
      "billing_address": "Av. Siempre Viva 123, Buenos Aires, CABA",
      "shipping_address": "Av. Siempre Viva 123, Buenos Aires, CABA"
    },
    "financial_summary": {
      "payment_terms": "30 días",
      "credit_limit": 100000,
      "current_balance": 25000,
      "preferred_invoice_type": "Factura B"
    },
    "historical_summary": {
      "last_invoice_date": "2026-04-05",
      "total_invoices": 124,
      "total_billed": 450000,
      "total_paid": 425000,
      "total_outstanding": 25000
    },
    "preferences": {
      "language": "es",
      "notification_preferences": {
        "email": true,
        "whatsapp": true
      }
    }
  }];
  */

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      border: "1px solid #ccc",
      padding: "5px 10px",
      borderRadius: 6,
      maxWidth: 300,
      marginRight: '5px'
    },
    input: {
      border: "none",
      outline: "none",
      flex: 1,
      fontSize: 16
    }
  };

  const [query, setQuery] = useState("");

  return (
    <div style={{ marginLeft: '220px' }}>
      <h1>Nuestros Clientes</h1>
      <p>Gestiona tus clientes de manera rápida y sencilla.</p>
      <p>Agrega, edita o busca información importante de cada uno.</p>

      {/* [➕ Nuevo Cliente]  [🔍 Buscar Cliente] */}

      <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', maxWidth: '880px' }}>
        <div style={styles.container}>
          <input
            type="text"
            placeholder="Buscar cliente..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={styles.input}
          />
          <Icon size={20} color="#555" />
        </div>
        <Button onClick={() => setOpenModal2(true)} type="primary" text='Agregar Cliente' />
        <Button onClick={() => handleClickDownload(data)} type="export" text='Exportar a Excel' />
        <Button onClick={() => handleClickDownloadCSV(data)} type="export" text='Exportar a CSV' />
        <Button onClick={() => handleClickDownloadPDF(data)} type="export" text='Exportar a PDF' />
      </div>

      <Table columns={columns} data={data} />

      <div style={{ display: 'flex', fontFamily: 'Roboto, sans-serif;' }}>
        {/*<Card image={client} title='Resumen de Clientes' text='Total clientes: 150 | Activos: 120 | Con Pagos Pendientes: 30 | Prom. Facturas por Cliente' />*/}
        <Card button={true} image={client} title='Resumen de Clientes' />
      </div>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title="Cliente" children={modalData} />
      <Modal
        isOpen={openModal2}
        onClose={() => setOpenModal2(false)}
        title="Nuevo Cliente"
      >
        <NuevoCliente />
      </Modal>
    </div>
  );
};

export default Clients;
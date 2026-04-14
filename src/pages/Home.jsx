import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SalesChart from '../components/charts/SalesChart';
import RecentInvoices from '../components/RecentInvoices';
import PendingInvoices from '../components/PendingInvoices';
import sales_daily from '../assets/sales_daily.jpg';
import month_sales from '../assets/month_sales.png';
import invoice from '../assets/invoice.jpg';
import pending from '../assets/pending.png';
import Modal from '../components/ui/Modal';
import NuevaFactura from "../components/NuevaFactura";
import NuevoCliente from "../components/NuevoCliente";
import NuevoProducto from "../components/NuevoProducto";

const Home = () => {

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

  const navigate = useNavigate();

  return (
    <div style={{ marginLeft: '220px' }}>
      <h1>Home</h1>
      <h5>Bienvenido, User</h5>
      <h5>Resumen de tu negocio hoy</h5>
      <div style={{ display: 'flex', fontFamily: 'Roboto, sans-serif;' }}>
        <Card button={true} path="today-sale" image={sales_daily} title='Ventas Hoy' text='$12.450' />
        <Card button={true} path="month-sale" image={month_sales} title='Ventas Mes' text='$230.000' />
        <Card button={true} path="invoices" image={invoice} title='Facturas' text='18' />
        <Card button={true} path="home" image={pending} title='Pendientes' text='3' />
      </div>

      <h1 style={{ marginTop: '40px' }}>Acciones rápidas</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '600px' }}>
        <Button  onClick={() => setOpenModal(true)} type="success" text='Nueva factura' />
        <Button onClick={() => setOpenModal2(true)} type="success" text='Nuevo cliente' />
        <Button onClick={() => setOpenModal3(true)} type="success" text='Nuevo producto' />
        <Button onClick={() => navigate("/reports")} type="tertiary" text='Ver reportes'/>
      </div>

      <SalesChart title="Gráfico de ventas" />
      <RecentInvoices />
      <PendingInvoices />

      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Nueva Factura"
      >
        <NuevaFactura />
      </Modal>
     
      <Modal
        isOpen={openModal2}
        onClose={() => setOpenModal2(false)}
        title="Nuevo Cliente"
      >
        <NuevoCliente />
      </Modal>

      <Modal
        isOpen={openModal3}
        onClose={() => setOpenModal3(false)}
        title="Nuevo Producto"
      >
        <NuevoProducto onSave={(producto) => console.log(producto)} />
      </Modal>
  
    </div>
  );
};

export default Home;
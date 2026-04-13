import Card from "../components/Card";
import SalesChart from '../components/SalesChart';
import RecentInvoices from '../components/RecentInvoices';
import sales_daily from '../assets/sales_daily.jpg';
import devolution from '../assets/devolution.png';
import invoice from '../assets/invoice.jpg';
import client from '../assets/client.png';
import stock from '../assets/stock.png';
import sold2 from '../assets/sold2.png';
import average from '../assets/average.png';

const Dashboard = () => {
  return (
    <div style={{ marginLeft: '220px' }}>
      <h1>Dashboard</h1>

      <div style={{ display: 'flex' }}>
        <Card button={true} path="today-sale" image={sales_daily} title='Ventas Hoy' text='$12.500' />
        <Card button={true} path="devolutions" image={devolution} title='Devoluciones' text='$185.000' />
        <Card button={true} path="ticket" image={average} title='Ticket. Prom.' text='Ticket. Prom.' />
        <Card button={true} path="invoices" image={invoice} title='Facturas' text='23' />
        <Card button={true} path="clients" image={client} title='Clientes' text='25' />
      </div>

      {/*
      <div style={{ display: 'flex' }}>
        <Card image={invoice} title='Facturas' text='23' />
        <Card image={client} title='Clientes' text='25' />
      </div>
      */}

      <h1>Gráfico de Ventas | últimos 7 / 30 días</h1>

      <SalesChart />

      <div style={{ display: 'flex' }}>
        <Card button={false} image={sold2} title='Productos mas vendidos' text='1 | Coca Cola' />
        <Card button={false} image={stock}  title='Stock bajo | ⚠ Alertas' text='Harina x5' />
      </div>
      
      <RecentInvoices />
    </div>
  );
};

export default Dashboard;
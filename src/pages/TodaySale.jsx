import Card from '../components/ui/Card';
import sales_daily from '../assets/sales_daily.jpg';
import month_sales from '../assets/month_sales.png';
import invoice from '../assets/invoice.jpg';
import SalesChart from '../components/charts/SalesChart';
import GraficoMediosPago from "../components/charts/GraficoMediosPago";
import GraficoTopProductos from "../components/charts/GraficoTopProductos";

const data = [
  { metodo: "Efectivo", monto: 50000 },
  { metodo: "Tarjeta", monto: 30000 },
  { metodo: "Transferencia", monto: 20000 },
  { metodo: "QR", monto: 10000 },
];

const data2 = [
  { nombre: "Coca Cola 500ml", cantidad: 120 },
  { nombre: "Pan", cantidad: 95 },
  { nombre: "Leche", cantidad: 80 },
  { nombre: "Galletitas", cantidad: 60 },
];

const Home = () => {

  return (
    <div style={{ marginLeft: '220px' }}>
      <h1>Ventas del Dia</h1>
      <h5>Resumen de tu negocio hoy</h5>
      <div style={{ display: 'flex', fontFamily: 'Roboto, sans-serif;' }}>
        <Card path="home" image={sales_daily} title='💰 Total vendido' text='$12.450' />
        <Card path="home" image={month_sales} title='🧾 Cantidad de ventas' text='$230.000' />
        <Card path="invoices" image={invoice} title='📊 Ticket promedio' text='18' />
      </div>

      <SalesChart title="Ventas por hora" />

      <GraficoMediosPago data={data} />
      
      <GraficoTopProductos data={data2} />
    </div>
  );
};

export default Home;
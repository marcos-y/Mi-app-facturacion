import React, { useState } from "react";
import Card from '../components/Card';
import sales_daily from '../assets/sales_daily.jpg';
import month_sales from '../assets/month_sales.png';
import invoice from '../assets/invoice.jpg';
import SalesDayChart from '../components/SalesDayChart';
import CategorySalesChart from "../components/CategorySalesChart";
import PaymentStateChart from "../components/PaymentStateChart";
import Table from "../components/Table";
import Button from "../components/Button";

/*
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
*/

const Home = () => {

    const [openModal, setOpenModal] = useState(false);
    //const [openModal2, setOpenModal2] = useState(false);
    //const [openModal3, setOpenModal3] = useState(false);
    const [modalData, setModalData] = useState([]);

    const handleClick = (props) => {
        setOpenModal(true)
        setModalData(props)
        console.log(openModal)
        console.log(modalData)
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

    const data2 = [
        {
            id: 1,
            nroFactura: "INV-001",
            cliente: "Juan Pérez",
            fecha: "2026-03-01",
            total: 1200,
            estado: "Pendiente",
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
        }];

    return (
        <div style={{ marginLeft: '220px' }}>
            <h1>Ventas del Mes</h1>
            <h5>Resumen de tu negocio hoy</h5>
            <div style={{ display: 'flex', fontFamily: 'Roboto, sans-serif;' }}>
                <Card path="home" image={sales_daily} title='💰 Total facturado Mes' text='$12.450' />
                <Card path="home" image={month_sales} title='🧾 Cantidad de facturas Emitidas' text='$230.000' />
                <Card path="invoices" image={invoice} title='📊 Ticket promedio' text='18' />
                <Card path="invoices" image={invoice} title='📊 Ventas cobradas vs pendiente' text='18' />
                <Card path="invoices" image={invoice} title='📊 Comparacion con el mes anterior' text='18' />
            </div>

            <SalesDayChart />
            <CategorySalesChart />

            <h4 style={{ marginTop: '30px' }}>Listado facturas del Mes</h4>

            <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', maxWidth: '800px' }}>
                <Button type="primary" text='Filtrar por fecha' />
                <Button type="primary" text='Filtrar por cliente' />
                <Button type="primary" text='Filtrar por estado de pago' />
                <Button type="primary" text='Filtrar por vendedor' />
            </div>

            <Table columns={columns} data={data} />

            <h4 style={{ marginTop: '15px' }}>Top Ranking</h4>
            <div style={{ display: 'flex', fontFamily: 'Roboto, sans-serif;' }}>
                <Card path="home" image={sales_daily} title='🏆 Clientes que más compraron' text='$12.450' />
                <Card path="home" image={month_sales} title='📦 Productos más vendidos' text='$230.000' />
                <Card path="invoices" image={invoice} title='💰 Mejores días de ventas' text='18' />
            </div>

            <h4 style={{ marginTop: '15px' }}>Estado de cobranzas</h4>
            <div style={{ display: 'flex', fontFamily: 'Roboto, sans-serif;' }}>
                <Card path="home" image={sales_daily} title='💰 Cobrado' text='$12.450' />
                <Card path="home" image={month_sales} title='🧾 Pendiente' text='$230.000' />
                <Card path="invoices" image={invoice} title='📊 Vencido' text='18' />
            </div>
            <PaymentStateChart />

            <h4 style={{ marginTop: '15px' }}>Facturas vencidas</h4>
            <Table columns={columns} data={data2} />

            <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', maxWidth: '700px' }}>
                <Button type="primary" text='Exportar a Excel' />
                <Button type="primary" text='Exportar a CSV' />
                <Button type="primary" text='Exportar a PDF' />
                <Button type="primary" text='Imprimir resumen' />
            </div>

        </div>
    );
};

export default Home;
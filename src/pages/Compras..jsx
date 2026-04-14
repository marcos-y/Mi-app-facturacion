import Table from "../components/ui/Table";

    const columns2 = [
        { header: "Fecha", accessor: "fecha" },
        { header: "Producto", accessor: "producto" },
        { header: "Tipo", accessor: "tipo" },
        { header: "Cantidad", accessor: "cantidad" },
        { header: "Motivo", accessor: "motivo" }
    ];

    const data2 = [{
        fecha: "10/03",
        producto: "Mouse",
        tipo: "Entrada",
        cantidad: "+20",
        motivo: "Compra"
    },
    {
        fecha: "10/03",
        producto: "Mouse",
        tipo: "Entrada",
        cantidad: "+20",
        motivo: "Compra"
    },
    {
        fecha: "10/03",
        producto: "Mouse",
        tipo: "Entrada",
        cantidad: "+20",
        motivo: "Compra"
    }];

    const columns3 = [
        { header: "Producto", accessor: "producto" },
        { header: "Depósito Central", accessor: "deposito_central" },
        { header: "Local", accessor: "local" },
        { header: "Depósito Secundario", accessor: "deposito_secundario" },
        { header: "Online", accessor: "online" },
        { header: "Total", accessor: "total" }
    ];

    const data3 = [{
        producto: "Mouse Logitech",
        deposito_central: 25,
        local: 10,
        deposito_secundario: 25,
        online: 9,
        total: 75,
    },
    {
        producto: "Mouse Logitech",
        deposito_central: 25,
        local: 10,
        deposito_secundario: 25,
        online: 9,
        total: 75,
    },
    {
        producto: "Mouse Logitech",
        deposito_central: 25,
        local: 10,
        deposito_secundario: 25,
        online: 9,
        total: 75,
    },
    {
        producto: "Mouse Logitech",
        deposito_central: 25,
        local: 10,
        deposito_secundario: 25,
        online: 9,
        total: 75,
    }];

const Compras = () => {
    return (
        <div style={{ marginLeft: '220px' }}>
            <h1>Compras</h1>
            <h1>Ingreso de Artículos</h1>
            <h1>Movimientos de stock</h1>
            <Table style={{ marginTop: '10px' }} columns={columns2} data={data2} />

            <h1>Stock por depósito</h1>
            <Table columns={columns3} data={data3} />
        </div>
    );
};

export default Compras;
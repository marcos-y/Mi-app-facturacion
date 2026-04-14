import { useState } from "react";
import Table from "./ui/Table";
import Button from "./ui/Button";
import Modal from "./ui/Modal";

/*
-------------------------------------------------
N°      Cliente        Fecha        Total   Estado
-------------------------------------------------
00045   Juan Perez     09/03        $35.000 Pagada
00046   Empresa SRL    09/03        $120.000 Pendiente
00047   Carlos Diaz    08/03        $15.000 Pagada
-------------------------------------------------
*/

const RecentInvoices = () => {

    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState([]);

    const handleClick = (props) => {
        setOpenModal(true)
        setModalData(props)
    };

    const columns = [
        { header: "Nro", accessor: "nro" },
        { header: "Cliente", accessor: "cliente" },
        { header: "Fecha", accessor: "fecha" },
        { header: "Total", accessor: "total" },
        { header: "Estado", accessor: "estado" },
        {
            header: "Acciones",
            accessor: "actions",
            render: (_, row) => (
                <Button type="primary" text='ver' onClick={() => handleClick([row.nro, row.cliente, row.fecha, row.total, row.estado])} />
            )
        }
    ];

    const data = [
        { nro: "00045", cliente: "juan@mail.com", fecha: 28, total: '$35.000', estado: 'Pagada' },
        { nro: "00046", cliente: "maria@mail.com", fecha: 32, total: '$120.000', estado: 'Pendiente' },
        { nro: "00047", cliente: "pedro@mail.com", fecha: 24, total: '$15.000', estado: 'Pagada' }
    ];

    /*
    const data2 = [
    {
        "header": {
          "formatted_number": "0001-00001234",
          "type": "Factura B",
          "issue_date": "2026-04-09",
          "due_date": "2026-04-20",
          "status": "Pagada",
          "currency": "ARS"
        },
        "parties": {
          "seller_name": "Mi Empresa SRL",
          "seller_cuit": "30-12345678-9",
          "buyer_name": "Juan Pérez",
          "buyer_doc": "DNI 12345678",
          "buyer_tax_condition": "Consumidor Final"
        },
        "items": [
          {
            "description": "Producto X",
            "quantity": 2,
            "unit_price": 100,
            "discount": 0,
            "subtotal": 200,
            "iva": 42,
            "total": 242
          }
        ],
        "totals": {
          "subtotal": 200,
          "discounts": 0,
          "taxes": 42,
          "total": 242
        },
        "payment": {
          "method": "Tarjeta",
          "paid": true,
          "balance": 0
        },
        "afip": {
          "cae": "12345678901234",
          "cae_expiration": "2026-04-20"
        },
        "extras": {
          "notes": "Gracias por su compra"
        }
    },
    {
        "header": {
          "formatted_number": "0001-00001235",
          "type": "Factura B",
          "issue_date": "2026-04-09",
          "due_date": "2026-04-20",
          "status": "Pagada",
          "currency": "ARS"
        },
        "parties": {
          "seller_name": "Mi Empresa SRL",
          "seller_cuit": "30-12345678-9",
          "buyer_name": "Juan Pérez",
          "buyer_doc": "DNI 12345678",
          "buyer_tax_condition": "Consumidor Final"
        },
        "items": [
          {
            "description": "Producto X",
            "quantity": 2,
            "unit_price": 100,
            "discount": 0,
            "subtotal": 200,
            "iva": 42,
            "total": 242
          }
        ],
        "totals": {
          "subtotal": 200,
          "discounts": 0,
          "taxes": 42,
          "total": 242
        },
        "payment": {
          "method": "Tarjeta",
          "paid": true,
          "balance": 0
        },
        "afip": {
          "cae": "12345678901234",
          "cae_expiration": "2026-04-20"
        },
        "extras": {
          "notes": "Gracias por su compra"
        }
    }];
    */

    return (
        <div>
            <h1>Últimas facturas</h1>
            <Table columns={columns} data={data} />
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title="Factura" children={modalData} />
        </div>
    );
};

export default RecentInvoices;
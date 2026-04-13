import { useState } from "react";
import Table from "./Table";
import Button from "./Button";
import Modal from "./Modal";

const PendingInvoices = () => {

   const [openModal, setOpenModal] = useState(false);
   const [modalData,setModalData] = useState([]);

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
           <Button type="primary" text='ver' onClick={() => handleClick([row.nro, row.cliente, row.fecha, row.total, row.estado] )} />
        )
    }
];

const data = [
    {nro: "00045", cliente: "juan@mail.com", fecha: 28, total:'$35.000', estado:'Pagada' },
    {nro: "00046", cliente: "maria@mail.com", fecha: 32, total:'$120.000', estado:'Pendiente' },
    {nro: "00047", cliente: "pedro@mail.com", fecha: 24, total:'$15.000', estado:'Pagada' }
];

  return (
    <div>
      <h1 style={{ marginTop: '40px' }}>Facturas pendientes</h1>
      <Table columns={columns} data={data} />
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}  title="Factura" children={modalData} />
    </div>
  );
};

export default PendingInvoices;
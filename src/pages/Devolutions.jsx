import { useState } from "react";
import Table from "../components/Table";
import Button from "../components/Button";
import Modal from "../components/Modal";
import DetalleDevolucion from "../components/DetalleDevolucion";
import NuevaDevolucion from "../components/NuevaDevolucion";
import Fecha from "../components/FiltrarFecha";
import SelectorEstado from "../components/SelectEstado";
import FormularioComprobante from "../components/FormularioComprobante";

const Devolutions = () => {

  const [tableData, setTableData] = useState([]);

  const columns = [
    { header: "Nro. Dev", accessor: "id" },
    { header: "Fecha", accessor: "fecha" },
    { header: "Estado", accessor: "estado" },
    { header: "Cliente", accessor: "nombre" },
    { header: "Documento", accessor: "documento" },
    { header: "Nro. Factura", accessor: "numero" },
    { header: "Total", accessor: "total" },
    { header: "Estado Reintegro", accessor: "estadoReintegro" },
    {
      header: "Acciones",
      accessor: "actions",
      render: (_, row) => (
        <Button type="primary" text='ver' onClick={() => handleClick(
          row.id,
          row.fecha,
          row.estado,
          row.nombre,
          row.documento,
          row.usuario,
          row.numero,
          row.total,
          row.estadoReintegro,
          row.items,
          row.resumenSub,
          row.resumenImp,
          row.resumenTot,
          row.reintegroMetodo,
          row.reintegroEstado,
          row.reintegroRef,
          row.reintegroFec,
          row.observaciones,
          row.auditoriaCreado,
          row.auditoriaActual,
          row.auditoriaHisto
        )} />
      )
    }
  ];

  const data = {
    devoluciones: [
      {
        id: "00045",
        fecha: "2026-04-10T14:35:00",
        estado: "completada",
        usuario: { id: "u001", nombre: "admin" },
        cliente: { nombre: "Juan Pérez", documento: "12345678" },
        factura: {
          numero: "F001-23",
          fecha: "2026-04-05",
          punto_venta: "Sucursal Centro",
          vendedor: "María López"
        },
        items: [
          {
            codigo: "P01",
            producto: "Remera Azul",
            cantidad: 1,
            precio_unitario: 5000,
            subtotal: 5000,
            motivo: "Cambio de talle"
          }
        ],
        resumen: {
          subtotal: 5000,
          impuestos: 0,
          total: 5000,
          moneda: "ARS"
        },
        reintegro: {
          metodo: "tarjeta",
          estado: "reintegrado",
          referencia: "TXN-998877",
          fecha: "2026-04-10T15:00:00"
        },
        observaciones: "Producto defectuoso",
        auditoria: {
          creado_en: "2026-04-10T14:35:00",
          actualizado_en: "2026-04-10T15:05:00",
          historial: []
        }
      },
      {
        id: "00046",
        fecha: "2026-04-10T14:35:00",
        estado: "completada",
        usuario: { id: "u001", nombre: "admin" },
        cliente: { nombre: "Juan Pérez", documento: "12345678" },
        factura: {
          numero: "F001-23",
          fecha: "2026-04-05",
          punto_venta: "Sucursal Centro",
          vendedor: "María López"
        },
        items: [
          {
            codigo: "P01",
            producto: "Remera Azul",
            cantidad: 1,
            precio_unitario: 5000,
            subtotal: 5000,
            motivo: "Cambio de talle"
          }
        ],
        resumen: {
          subtotal: 5000,
          impuestos: 0,
          total: 5000,
          moneda: "ARS"
        },
        reintegro: {
          metodo: "tarjeta",
          estado: "reintegrado",
          referencia: "TXN-998877",
          fecha: "2026-04-10T15:00:00"
        },
        observaciones: "Producto defectuoso",
        auditoria: {
          creado_en: "2026-04-10T14:35:00",
          actualizado_en: "2026-04-10T15:05:00",
          historial: []
        }
      }]
  };

  /*
  const headerData = [
    {
      id: "#00045",
      fecha: "2026-03-01",
      estado: 'completada',
      cliente: "Juan Pérez",
      documento: '12345678',
      factura: "INV-001",

      fechaCompra: '05/04/26',
      total: 1200,
      estado: "Pagada",
      acciones: "ver"
    }
  ];
  */

  const headerData = data.devoluciones.map(u =>
  ({
    id: u.id,
    fecha: u.fecha,
    estado: u.estado,
    nombre: u.cliente.nombre,
    documento: u.cliente.documento,
    usuario: u.usuario.nombre,
    numero: u.factura.numero,
    total: u.resumen.total,
    estadoReintegro: u.reintegro.estado,
    items: u.items,
    resumenSub: u.resumen.subtotal,
    resumenImp: u.resumen.impuestos,
    resumenTot: u.resumen.total,
    reintegroMetodo: u.reintegro.metodo,
    reintegroEstado: u.reintegro.estado,
    reintegroRef: u.reintegro.referencia,
    reintegroFec: u.reintegro.fecha,
    observaciones: u.observaciones,
    auditoriaCreado: u.auditoria.creado_en,
    auditoriaActual: u.auditoria.actualizado_en,
    auditoriaHisto: u.auditoria.historial
  })
  );

  //** MODAL Detalle Devolucion **/
  const [openModal, setOpenModal] = useState(false);
  const handleClick = (
    id,
    fecha,
    estado,
    nombre,
    documento,
    usuario,
    numero,
    total,
    estadoReintegro,
    items,
    resumenSub,
    resumenImp,
    resumenTot,
    reintegroMetodo,
    reintegroEstado,
    reintegroRef,
    reintegroFec,
    observaciones,
    auditoriaCreado,
    auditoriaActual,
    auditoriaHisto) => {
    setOpenModal(true)
    setModalData({
      id,
      fecha,
      estado,
      nombre,
      documento,
      usuario,
      numero,
      total,
      estadoReintegro,
      items,
      resumenSub,
      resumenImp,
      resumenTot,
      reintegroMetodo,
      reintegroEstado,
      reintegroRef,
      reintegroFec,
      observaciones,
      auditoriaCreado,
      auditoriaActual,
      auditoriaHisto
    })
  };

  //** MODAL Nueva devolucion **/
  const [modalData, setModalData] = useState([]);
  const [openModal2, setOpenModal2] = useState(false);
  const handleClick2 = () => (
    setOpenModal2(true)
  );

  //** MODAL Filtro Fecha **/
  const [openModal3, setOpenModal3] = useState(false);
  const handleClick3 = () => (
    setOpenModal3(true)
  );

  //** MODAL Filtro Estado **/
  const [openModal4, setOpenModal4] = useState(false);
  const handleClick4 = () => (
    setOpenModal4(true)
  );

  //** MODAL Filtro Factura**/
  const [openModal5, setOpenModal5] = useState(false);
  const handleClick5 = () => (
    setOpenModal5(true)
  );

  const [estado, setEstado] = useState("");
  const estados = [
    { id: 1, nombre: "Completada" },
    { id: 2, nombre: "Incompleta" },
    { id: 3, nombre: "Reintegrado" },
    { id: 3, nombre: "No Reintegrado" },
  ];

  const items = [
    {
      id: 1,
      nombre: "Producto A",
      cantidad: 5
    },
    {
      id: 2,
      nombre: "Producto B",
      cantidad: 2
    }
  ];

  return (
    <div style={{ marginLeft: '220px', marginTop: '10px' }}>
      <h1>🔄 DEVOLUCIONES</h1>

      <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', maxWidth: '800px' }}>
        <Button onClick={() => handleClick5()} type="primary" text=' N° Factura / Cliente' />
        <Button onClick={() => handleClick3()} type="primary" text='📅 Fecha: [Desde - Hasta]' />
        <Button onClick={() => handleClick4()} type="primary" text='Estado: [Todos ▼]' />
        <Button onClick={() => handleClick2()} type="primary" text='+ Nueva Devolución' />
      </div>

      <Table columns={columns} data={headerData} />

      <Modal
        isOpen={openModal2}
        onClose={() => setOpenModal2(false)}
        title="Nueva Devolucion">
        <NuevaDevolucion items={items} />
      </Modal>

      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Detalle Devolucion"
      >
        <DetalleDevolucion data={modalData} />
      </Modal>

      <Modal
        isOpen={openModal3}
        onClose={() => setOpenModal3(false)}
        title="Filtrar Fecha"
      >
        <Fecha title="Fecha desde" />
        <Fecha title="Fecha Hasta" />
      </Modal>

      <Modal
        isOpen={openModal4}
        onClose={() => setOpenModal4(false)}
        title="Filtrar Estado"
      >
        <SelectorEstado
          estados={estados}
          value={estado}
          onChange={setEstado} />

      </Modal>

      <Modal
        isOpen={openModal5}
        onClose={() => setOpenModal5(false)}
        title="Filtrar Por Factura"
      >
        <FormularioComprobante/>
      </Modal>

    </div>
  );
};

export default Devolutions;
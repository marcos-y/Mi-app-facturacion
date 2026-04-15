import { useState } from "react";
import Button from "../components/ui/Button";
import ClienteSelector from "../components/ui/ClienteSelector";
import Modal from "../components/ui/Modal";
import Table from "../components/ui/Table";
import CampoObservaciones from "../components/ui/CampoOberservaciones";
import FiltrarFecha from "../components/ui/FiltrarFecha";
import Selector from "../components/ui/Select";
import FormularioComprobante from "../components/FormularioComprobante";
import NuevoCliente from "../components/NuevoCliente";
import NuevoProducto from "../components/NuevoProducto";

const NewSale = () => {

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

  const [tipoCliente] = useState("");

  const handleCliente = (cliente) => {
    console.log("Cliente seleccionado:", cliente);
  };

  const clientes = [
    { id: 1, nombre: "Juan Perez", documento: "32123123", iva: "Consumidor Final" },
    { id: 2, nombre: "Maria Gomez", documento: "28999888", iva: "Consumidor Final" },
    { id: 3, nombre: "Juan Perez SRL", documento: "30-12345678-9", iva: "Consumidor Final" }
  ];

  const columns = [
    {
      header: "Código",
      accessor: "codigo",
      render: (_, row) => (
        <input type="text" name="código[]" placeholder={row.codigo} />
      )
    },
    {
      header: "Descripción",
      accessor: "descripcion",
      render: (_, row) => (
        <input type="text" name="descripcion[]" placeholder="Descripción del producto" />
      )
    },
    {
      header: "Cantidad",
      accessor: "cantidad",
      render: (_, row) => (
        <input type="number" name="cantidad[]" min="1" value="1" />
      )
    },
    {
      header: "Precio Unitario",
      accessor: "precio_unitario",
      render: (_, row) => (
        <input type="number" name="precio[]" step="0.01" placeholder="0.00" />
      )
    },
    {
      header: "Descuento",
      accessor: "descuento",
      render: (_, row) => (
        <input type="number" name="descuento[]" step="0.01" placeholder="% o $" />
      )
    },
    {
      header: "Iva",
      accessor: "iva",
      render: (_, row) => (
        <select name="iva[]">
          <option value="0">0%</option>
          <option value="10.5">10.5%</option>
          <option value="21">21%</option>
          <option value="27">27%</option>
        </select>
      )
    },
    {
      header: "Subtotal",
      accessor: "subtotal",
      render: (_, row) => (
        <input type="text" name="subtotal[]" readonly placeholder="0.00" />
      )
    },
    {
      header: "Acciones",
      accessor: "actions",
      render: (_, row) => (
        <Button type="secondary" text='Eliminar Fila' onClick={() => setOpenModal(true)} />
      )
    },
  ];

  /*
  const data = [
    {
      descripcion: 'producto1',
      codigo: 1,
      cantidad: 1,
      precio_unitario: 1,
      descuento: 0.5,
      iva: 0,
      subtotal: 20
    }]; */


  const data = [
    {
      codigo: 0,
      descripcion: '',
      cantidad: 0,
      precio_unitario: 0,
      descuento: 0.5,
      iva: 0,
      subtotal: 20
    },
    {
      codigo: 0,
      descripcion: '',
      cantidad: 0,
      precio_unitario: 0,
      descuento: 0.5,
      iva: 0,
      subtotal: 20
    },
    {
      codigo: 0,
      descripcion: '',
      cantidad: 0,
      precio_unitario: 0,
      descuento: 0.5,
      iva: 0,
      subtotal: 20
    },
  ];

  //const [formaPago, setFormaPago] = useState("");
  const [vendedor, setVendedor] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");
  const [fechaEmision, setFechaEmision] = useState("");
  //const [condicionPago, setCondicionPago] = useState("");

  const vendedores = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Maria" }
  ];

  const [comprobante, setComprobante] = useState("");
  const comprobantes = [
    { id: 1, nombre: "Factura" },
    { id: 2, nombre: "Ticket" },
    { id: 2, nombre: "Nota de Crédito" },
    { id: 2, nombre: "Nota de Débito" },
  ];

  const [factura] = useState("");
  const facturas = [
    { id: 1, nombre: "A" },
    { id: 2, nombre: "B" },
    { id: 3, nombre: "B" },
  ];

  const [estado, setEstado] = useState("");
  const estados = [
    { id: 1, nombre: "Borrador" },
    { id: 2, nombre: "Emitido" },
    { id: 3, nombre: "Anulado" },
  ];

  const [ptoVta, setPtoVta] = useState("");
  const ptosVta = [
    { id: 1, nombre: "0001" },
    { id: 2, nombre: "0002" },
    { id: 3, nombre: "0003" },
    { id: 4, nombre: "0004" },
  ];

  const [condicion, setCondicion] = useState("");
  const condiciones = [
    { id: 1, nombre: "contado" },
    { id: 2, nombre: "15_dias" },
    { id: 3, nombre: "30_dias" },
    { id: 4, nombre: "60_dias" }
  ];

  //const data = [{ }];

  return (
    <div style={{ marginLeft: '220px', maxWidth: '1100px', margin: 'auto', border: 'solid', borderRadius: '4px', padding: '15px' }}>
      <h1>Nueva Venta</h1>
      <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', maxWidth: '370px' }}>
        <Button type="success" text='Guardar' />
        <Button onClick={() => setOpenModal(true)} type="secondary" text='Cancelar' />
        <Button onClick={() => setOpenModal2(true)} type="primary" text='Crear Cliente' />
      </div>

      <p>
        <h4 style={{ marginTop: '10px' }}>Datos del Cliente</h4>
        <ClienteSelector clientes={clientes} onSelect={handleCliente} />
      </p>
      {tipoCliente === "consumidor_final" && (
        <p>Venta como consumidor final</p>
      )}

      <h4 style={{ marginTop: '10px' }}>Datos del Comprobantee</h4>

      <div class="datos-comprobante">

        <Selector
          options={comprobantes}
          value={comprobante}
          onChange={setComprobante}
          title="Seleccionar comprobantes..."
          label="Comprobante"
        />

        <Selector
          options={facturas}
          value={factura}
          onChange={setComprobante}
          title="Tipo De Factura"
          label="Seleccionar Tipo Factura.."
        />

        <FormularioComprobante />

        <FiltrarFecha
          title="Fecha Emision"
          value={fechaEmision}
          onChange={setFechaEmision}
        />

        <Selector
          options={ptosVta}
          value={ptoVta}
          onChange={setPtoVta}
          title="Puntos de Venta"
          label="Seleccionar punto de venta..."
        />

        <Selector
          options={estados}
          value={estado}
          onChange={setEstado}
          title="Estado del Comprobante"
          label="Seleccionar Tipo Estado..."
        />

      </div>

      <h4 style={{ marginTop: '10px' }}>Productos o servicios vendidos</h4>
      <Table columns={columns} data={data} />

      <Selector
        options={vendedores}
        value={vendedor}
        onChange={setVendedor}
        title="Vendedor"
        label="Seleccionar vendedor..."
      />

      <FiltrarFecha
        title="Fecha Entrega"
        value={fechaEntrega}
        onChange={setFechaEntrega}
      />

      <Selector
        options={condiciones}
        value={condicion}
        onChange={setCondicion}
        title="Condición de pago"
        label="Seleccionar condicion pago..."
      />

      <CampoObservaciones
        value={observaciones}
        onChange={setObservaciones}
      />

      <h4 style={{ marginTop: '10px' }}>Acciones del sistema</h4>

      <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', maxWidth: '1000px' }}>
        <Button onClick={() => setOpenModal3(true)} type="success" text='Agregar Producto' />
        <Button type="success" text='Guardar Venta' />
        <Button type="success" text='Emitir Factura' />
        <Button type="success" text='Imprimir Ticket' />
        <Button type="success" text='Enviar por mail' />
        <Button type="success" text='Cancelar Venta' />
      </div>

      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Crear Cliente"
      >
        <form>
          <input placeholder="Nombre / razón social" />
          <input placeholder="DNI, CUIT o identificación fiscal." />
          <input placeholder="Dirección" />
          <input placeholder="Condición fiscal" />
          <input placeholder="Telefono" />
          <input placeholder="Email" />
          <button type="submit">Guardar</button>
        </form>
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

export default NewSale;
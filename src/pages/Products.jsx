import { useState } from "react";
import Button from "../components/Button";
import Table from "../components/Table";
import Icon from "../components/Icon";
import Modal from "../components/Modal";

const Products = () => {

  const columns = [
    { header: "Producto", accessor: "producto" },
    { header: "Sku", accessor: "sku" },
    { header: "Precio", accessor: "precio" },
    { header: "Stock", accessor: "stock" },
    { header: "Categoria", accessor: "categoria" },
    { header: "Estado", accessor: "estado" },
    {
      header: "Acciones",
      accessor: "actions",
      render: (_, row) => (
        <button onClick={() => alert(row.name)}>
          Ver
        </button>
      )
    }
  ];

  const data = [
    {
      id: 1,
      producto: "Laptop Dell Inspiron",
      sku: "LP-001",
      precio: 1200,
      stock: 8,
      categoria: "Tecnología",
      estado: "activo"
    },
    {
      id: 2,
      producto: "Mouse Logitech M185",
      sku: "MS-002",
      precio: 25,
      stock: 45,
      categoria: "Accesorios",
      estado: "activo"
    },
    {
      id: 3,
      producto: "Teclado Mecánico Redragon",
      sku: "KB-003",
      precio: 75,
      stock: 20,
      categoria: "Accesorios",
      estado: "activo"
    },
    {
      id: 4,
      producto: "Monitor Samsung 24''",
      sku: "MN-004",
      precio: 210,
      stock: 12,
      categoria: "Tecnología",
      estado: "activo"
    },
    {
      id: 5,
      producto: "Disco SSD 1TB Kingston",
      sku: "SD-005",
      precio: 110,
      stock: 30,
      categoria: "Almacenamiento",
      estado: "activo"
    },
    {
      id: 6,
      producto: "Memoria RAM 16GB Corsair",
      sku: "RM-006",
      precio: 95,
      stock: 18,
      categoria: "Componentes",
      estado: "activo"
    },
    {
      id: 7,
      producto: "Impresora HP LaserJet",
      sku: "PR-007",
      precio: 320,
      stock: 6,
      categoria: "Oficina",
      estado: "activo"
    },
    {
      id: 8,
      producto: "Auriculares Sony WH-CH510",
      sku: "HP-008",
      precio: 60,
      stock: 25,
      categoria: "Audio",
      estado: "activo"
    },
    {
      id: 9,
      producto: "Webcam Logitech C920",
      sku: "WC-009",
      precio: 95,
      stock: 14,
      categoria: "Accesorios",
      estado: "activo"
    },
    {
      id: 10,
      producto: "Servicio Técnico PC",
      sku: "SRV-010",
      precio: 80,
      stock: 999,
      categoria: "Servicios",
      estado: "activo"
    },
    {
      id: 11,
      producto: "Router TP-Link AX3000",
      sku: "RT-011",
      precio: 150,
      stock: 10,
      categoria: "Redes",
      estado: "activo"
    },
    {
      id: 12,
      producto: "Tablet Samsung Galaxy Tab",
      sku: "TB-012",
      precio: 340,
      stock: 7,
      categoria: "Tecnología",
      estado: "activo"
    },
    {
      id: 13,
      producto: "Cámara de Seguridad Xiaomi",
      sku: "CM-013",
      precio: 65,
      stock: 22,
      categoria: "Seguridad",
      estado: "activo"
    },
    {
      id: 14,
      producto: "Parlante Bluetooth JBL",
      sku: "SP-014",
      precio: 90,
      stock: 16,
      categoria: "Audio",
      estado: "activo"
    },
    {
      id: 15,
      producto: "Cable HDMI 2m",
      sku: "CB-015",
      precio: 12,
      stock: 100,
      categoria: "Accesorios",
      estado: "activo"
    }
  ];

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

  const [openModal, setOpenModal] = useState(false);

  return (
    <div style={{ marginLeft: '220px' }}>
      <h1>Products</h1>
      <p>Administra los productos o servicios que puedes agregar a tus facturas.</p>
      <h5>Total productos: 120</h5>
      <h5>Productos activos: 110</h5>
      <h5>Productos sin stock: 10</h5>
      <Button type="success" onClick={() => setOpenModal(true)} text='+ Nuevo producto' />
      <Button type="success" text='Importar' />
      <Button type="success" text='Exportar' />
      <div style={styles.container}>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <Icon size={20} color="#555" />
      </div>
      <Table columns={columns} data={data} />

      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Crear producto"
      >
        <form>
          <input placeholder="Nombre producto" />
          <input placeholder="Precio" />
          <input placeholder="Stock" />

          <button type="submit">Guardar</button>
        </form>
      </Modal>
    </div>
  );
};

export default Products;
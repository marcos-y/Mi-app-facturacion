import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

/* DescargaPDF */
export function exportPDF(data) {

    const doc = new jsPDF();
    const headers = [Object.keys(data[0])];
    const rows = data.map(obj => Object.values(obj));

    autoTable(doc, {
        head: headers,
        body: rows
    });

    doc.save("clientes.pdf");
};


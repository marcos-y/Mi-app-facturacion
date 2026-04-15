import * as XLSX from "xlsx";

export function exportExcel(data) {
    // lógica XLSX

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");
    // Descargar archivo
    XLSX.writeFile(workbook, "clientes.xlsx");

    console.log('Descarga finalizada')
}
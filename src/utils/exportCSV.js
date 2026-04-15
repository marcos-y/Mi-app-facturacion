 /* Convierte array a Csv */
export function arrayToCSV(data) {
    if (!data.length) return "";

    const headers = Object.keys(data[0]);

    const escape = (value) => {
      if (value == null) return "";
      return `"${String(value).replace(/"/g, '""')}"`;
    };

    const rows = data.map(obj =>
      headers.map(header => escape(obj[header])).join(",")
    );

    return [headers.join(","), ...rows].join("\n");
}

 /* Download Csv */
export function exportCSV(csv) {

    let filename = 'Clientes'

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}
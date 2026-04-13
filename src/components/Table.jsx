const Table = ({ columns, data }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.accessor} style={styles.th}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} style={styles.tr}>
              {columns.map((col) => (
                <td key={col.accessor} style={styles.td}>
                  {col.render
                    ? col.render(row[col.accessor], row)
                    : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "Arial"
  },
  th: {
    borderBottom: "2px solid #ddd",
    textAlign: "left",
    padding: "10px",
    background: "#f5f5f5"
  },
  td: {
    borderBottom: "1px solid #eee",
    padding: "10px"
  },
  tr: {
    transition: "background 0.2s"
  }
};

export default Table;
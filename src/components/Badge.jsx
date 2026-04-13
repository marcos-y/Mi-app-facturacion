const Badge = ({ isActive, text }) => {
  const styles = {
    padding: "6px 12px",
    borderRadius: "12px",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: isActive === "active" ? "#007bff" : "#dc3545", // azul o rojo
    display: "inline-block"
  };

  return <span style={styles}>{text}</span>;
};

export default Badge;
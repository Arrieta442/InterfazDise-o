export default function Card({
  icon,
  title,
  value,
  progress,
  footer,
  iconColor = "#000",
  barColor = "#000"
}) {
  return (
    <div style={styles.card}>
      
      {/* Encabezado */}
      <div style={styles.header}>
        <span style={{ color: iconColor, fontSize: 22 }}>{icon}</span>
        <span style={styles.title}>{title}</span>
      </div>

      {/* Valor */}
      <div style={styles.value}>{value}</div>

      {/* Barra */}
      <div style={styles.barBackground}>
        <div style={{ ...styles.barFill, width: `${progress}%`, backgroundColor: barColor }} />
      </div>

      {/* Pie de tarjeta */}
      <div style={styles.footer}>{footer}</div>

    </div>
  );
}

const styles = {
  card: {
    background: "white",
    borderRadius: "16px",
    padding: "20px",
    width: "300px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    margin: "10px"
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  title: {
    fontSize: "18px",
    fontWeight: "600"
  },
  value: {
    marginTop: "20px",
    fontSize: "32px",
    fontWeight: "700"
  },
  barBackground: {
    marginTop: "10px",
    height: "8px",
    width: "100%",
    background: "#ddd",
    borderRadius: "4px"
  },
  barFill: {
    height: "8px",
    borderRadius: "4px"
  },
  footer: {
    marginTop: "10px",
    color: "#666",
    fontSize: "14px"
  }
};
// src/components/common/BigButton.jsx
import { useNavigate } from 'react-router-dom';

export default function Boton({ texto, emoji, destino }) {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => navigate(destino)}
      style={{
        padding: "50px 30px",
        fontSize: "24px",
        fontWeight: "bold",
        backgroundColor: "white",
        border: "none",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        cursor: "pointer",
        transition: "all 0.3s",
        minWidth: "200px"
      }}
      onMouseEnter={(e) => e.target.style.transform = "translateY(-10px)"}
      onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
    >
      <div style={{fontSize: "60px", marginBottom: "10px"}}>{emoji}</div>
      {texto}
    </button>
  );
}
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ to = "/" }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => navigate(to)}
      className="back-button"
      style={{
        position: "absolute",
        left: "20px",
        top: "20px",
        width: "48px",
        height: "48px",
        borderRadius: "12px",
        border: "1px solid #e0e0e0",
        background: isHovered ? "#f5f5f5" : "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontSize: "24px",
        boxShadow: isHovered
          ? "0 4px 8px rgba(0,0,0,0.1)"
          : "0 2px 4px rgba(0,0,0,0.05)",
        zIndex: 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Volver"
    >
      ←
    </button>
  );
}

import React from "react";
import "./CardElements.css";

export default function CardElements({ nombre, codigo, cantidad, ubicacion, estado, categoria }) {
  // Determinar color según el estado
  const getStatusColor = () => {
    if (estado === "Disponible") return "#4caf50";
    if (estado === "Stock Bajo") return "#ff9800";
    if (estado === "Agotado") return "#f44336";
    return "#999";
  };

  // Determinar color según la categoría
  const getCategoryColor = () => {
    if (categoria === "A") return "#4caf50";
    if (categoria === "B") return "#2196f3";
    if (categoria === "C") return "#ff5722";
    return "#999";
  };

  return (
    <div className="card-element">
      <div className="card-element-header">
        <h4 className="card-element-title">{nombre}</h4>
        {categoria && (
          <span 
            className="card-element-category" 
            style={{ backgroundColor: getCategoryColor() }}
          >
            Cat. {categoria}
          </span>
        )}
      </div>

      <div className="card-element-body">
        <div className="card-element-info">
          <div className="card-element-row">
            <span className="card-element-label">📦 Código:</span>
            <span className="card-element-value">{codigo}</span>
          </div>

          <div className="card-element-row">
            <span className="card-element-label">📊 Cantidad:</span>
            <span className="card-element-value">{cantidad}</span>
          </div>

          <div className="card-element-row">
            <span className="card-element-label">📍 Ubicación:</span>
            <span className="card-element-value">{ubicacion}</span>
          </div>
        </div>

        {estado && (
          <div className="card-element-status" style={{ color: getStatusColor() }}>
            <span className="status-dot" style={{ backgroundColor: getStatusColor() }}></span>
            {estado}
          </div>
        )}
      </div>
    </div>
  );
}

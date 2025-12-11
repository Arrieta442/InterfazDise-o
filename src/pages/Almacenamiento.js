
import React from "react";
import Card from "../components/common/boton";
import CardElements from "../components/common/CardElements";
import BackButton from "../components/common/BackButton";

export default function Almacenamiento() {
  
  return (
    <div className="almacenamiento-container">

      {/* HEADER */}
      <div className="alm-header" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 30px',
        background: 'white',
        borderBottom: '1px solid #e0e0e0',
        position: 'relative'
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
          <BackButton to="/" />
          
          <div style={{marginLeft: '50px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <h2 style={{margin: 0, fontSize: '28px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px'}}>
            📦Gestión de Almacenamiento
            </h2>
            <p className="alm-subtitle" style={{margin: '5px 0 0 40px', color: '#666', fontSize: '14px'}}>
                Control de inventario por categorías
            </p>
          </div>
        </div>

        <div style={{display: 'flex', gap: '30px', alignItems: 'center'}}>
          <div style={{textAlign: 'right'}}>
            <div style={{fontSize: '12px', color: '#666', marginBottom: '4px'}}>Nivel de Acceso</div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <strong style={{fontSize: '14px'}}>OPERADOR</strong>
              <span style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#2196f3',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>1</span>
            </div>
          </div>

          <div style={{textAlign: 'right'}}>
            <div style={{fontSize: '12px', color: '#666', marginBottom: '4px'}}>Última actualización</div>
            <strong style={{fontSize: '16px'}}>7:40:14</strong>
          </div>
        </div>
      </div>

      {/* PORCENTAJE DE OCUPACIÓN */}
      <div className="alm-section">
        <h3>Porcentaje de Ocupación</h3>

        <div className="alm-percentage" style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '12px'}}>
          {/* Top: percentage + categories */}
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{fontSize: '48px', fontWeight: 700, color: '#0e0e0e'}}>73%</div>

            <div style={{display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                <div style={{fontSize: '32px', fontWeight: 700, color: '#4caf50'}}>803</div>
                <div style={{fontSize: '13px', color: '#666'}}>Categoría A</div>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                <div style={{fontSize: '32px', fontWeight: 700, color: '#2196f3'}}>1.924</div>
                <div style={{fontSize: '13px', color: '#666'}}>Categoría B</div>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                <div style={{fontSize: '32px', fontWeight: 700, color: '#ff5722'}}>930</div>
                <div style={{fontSize: '13px', color: '#666'}}>Categoría C</div>
              </div>
            </div>
          </div>

          {/* Middle: units text */}
          <div style={{color: '#666', fontSize: '14px'}}>
            3.657 unidades de 5.000 máximo
          </div>

          {/* Bottom: progress bar + percentage marks */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <div className="alm-bar-background" style={{width: '100%', height: '12px', borderRadius: '6px', background: '#e0e0e0', overflow: 'hidden'}}>
              <div className="alm-bar-fill" style={{ width: "73%", height: '100%', background: '#1a1a1a' }}></div>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'space-between', color: '#999', fontSize: '12px'}}>
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* TRES COLUMNAS */}
      <div className="alm-columns">

        {/* CATEGORÍA A */}
        <div className="alm-card-category">
          <div className="alm-cat-header">
            <h4>Productos en Categoría A</h4>
            <span className="alm-badge green">8 productos</span>
          </div>

          <div className="alm-alert red">2 productos con stock bajo</div>

          <div className="alm-product-list">

            <CardElements
              nombre="Procesador ARM-64"
              codigo="A-005"
              cantidad="234"
              ubicacion="Estante 1-A"
              estado="Disponible"
              categoria="A"
            />

            <CardElements
              nombre='Display OLED 7"'
              codigo="A-014"
              cantidad="67"
              ubicacion="Estante 1-B"
              estado="Disponible"
              categoria="A"
            />

            <CardElements
              nombre="Batería Li-Po 5000mAh"
              codigo="A-007"
              cantidad="198"
              ubicacion="Estante 1-C"
              estado="Disponible"
              categoria="A"
            />

            <CardElements
              nombre="Motor Servo MG996R"
              codigo="A-008"
              cantidad="8"
              ubicacion="Estante 1-D"
              estado="Stock Bajo"
              categoria="A"
            />

          </div>

          <div className="alm-total">Total unidades: <strong>803</strong></div>
        </div>

        {/* CATEGORÍA B */}
        <div className="alm-card-category">
          <div className="alm-cat-header">
            <h4>Productos en Categoría B</h4>
            <span className="alm-badge blue">9 productos</span>
          </div>

          <div className="alm-alert red">1 producto con stock bajo</div>

          <div className="alm-product-list">

            <CardElements
              nombre="Etiquetas Identificación"
              codigo="B-106"
              cantidad="9"
              ubicacion="Estante 2-A"
              estado="Stock Bajo"
              categoria="B"
            />

            <CardElements
              nombre="Plástico Protector"
              codigo="B-015"
              cantidad="423"
              ubicacion="Estante 2-B"
              estado="Disponible"
              categoria="B"
            />

            <CardElements
              nombre="Cinta Adhesiva Industrial"
              codigo="B-108"
              cantidad="167"
              ubicacion="Estante 2-C"
              estado="Disponible"
              categoria="B"
            />

          </div>

          <div className="alm-total">Total unidades: <strong>1.924</strong></div>
        </div>

        {/* CATEGORÍA C */}
        <div className="alm-card-category">
          <div className="alm-cat-header">
            <h4>Productos en Categoría C</h4>
            <span className="alm-badge orange">8 productos</span>
          </div>

          <div className="alm-alert red">2 productos con stock bajo</div>

          <div className="alm-product-list">

            <CardElements
              nombre="Calibrador Digital"
              codigo="C-204"
              cantidad="203"
              ubicacion="Estante 3-A"
              estado="Disponible"
              categoria="C"
            />

            <CardElements
              nombre="Carro Transporte Industrial"
              codigo="C-207"
              cantidad="15"
              ubicacion="Estante 3-B"
              estado="Disponible"
              categoria="C"
            />

            <CardElements
              nombre="Marcador Permanente (Pack 12)"
              codigo="C-206"
              cantidad="389"
              ubicacion="Estante 3-C"
              estado="Disponible"
              categoria="C"
            />

          </div>

          <div className="alm-total">Total unidades: <strong>930</strong></div>
        </div>

      </div>
    </div>
  );
}

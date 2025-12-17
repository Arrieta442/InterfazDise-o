
import React, { useState, useEffect } from "react";
import Card from "../components/common/boton";
import CardElements from "../components/common/CardElements";
import BackButton from "../components/common/BackButton";
import useAlmacen from "../hooks/useAlmacen";

export default function Almacenamiento() {
  // Obtener datos del hook
  const { items, cargando, error } = useAlmacen();
  
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  );

  // Actualizar hora cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      const hora = new Date().toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(hora);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Función para determinar categoría basada únicamente en la ubicación
  const obtenerCategoria = (item) => {
    // La ubicación dicta la clasificación: A1 -> Categoría A, B2 -> Categoría B, etc.
    const ubicacionLetra = item.ubicacion?.charAt(0).toUpperCase();
    if (ubicacionLetra && /^[A-C]$/.test(ubicacionLetra)) {
      return ubicacionLetra;
    }
    
    // Por defecto categoría C si no tiene ubicación válida
    return 'C';
  };

  // Filtrar productos por categoría con iteración
  const productosA = items.filter(item => obtenerCategoria(item) === 'A');
  const productosB = items.filter(item => obtenerCategoria(item) === 'B');
  const productosC = items.filter(item => obtenerCategoria(item) === 'C');

  // Calcular totales (conteo de productos almacenados)
  const productosAlmacenados = items.filter(item => item.estado === 'almacenado');
  const totalA = productosA.filter(item => item.estado === 'almacenado').length;
  const totalB = productosB.filter(item => item.estado === 'almacenado').length;
  const totalC = productosC.filter(item => item.estado === 'almacenado').length;
  const totalUnidades = productosAlmacenados.length;
  const maxUnidades = 50; // Máximo de productos
  const porcentajeOcupacion = Math.round((totalUnidades / maxUnidades) * 100);

  // Contar productos con estados especiales
  const stockBajoA = productosA.filter(item => item.estado === 'Stock Bajo' || item.estado === 'bajo').length;
  const stockBajoB = productosB.filter(item => item.estado === 'Stock Bajo' || item.estado === 'bajo').length;
  const stockBajoC = productosC.filter(item => item.estado === 'Stock Bajo' || item.estado === 'bajo').length;

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
            <strong style={{fontSize: '16px'}}>{currentTime}</strong>
          </div>
        </div>
      </div>

      {/* PORCENTAJE DE OCUPACIÓN */}
      <div className="alm-section">
        <h3>Porcentaje de Ocupación</h3>

        <div className="alm-percentage" style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '12px'}}>
          {cargando ? (
            <div style={{textAlign: 'center', padding: '20px', color: '#666'}}>Cargando datos...</div>
          ) : error ? (
            <div style={{textAlign: 'center', padding: '20px', color: '#f44336'}}>Error: {error}</div>
          ) : (
            <>
              {/* Top: percentage + categories */}
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{fontSize: '48px', fontWeight: 700, color: '#0e0e0e'}}>{porcentajeOcupacion}%</div>

                <div style={{display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center'}}>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                    <div style={{fontSize: '32px', fontWeight: 700, color: '#4caf50'}}>{totalA.toLocaleString()}</div>
                    <div style={{fontSize: '13px', color: '#666'}}>Categoría A</div>
                  </div>

                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                    <div style={{fontSize: '32px', fontWeight: 700, color: '#2196f3'}}>{totalB.toLocaleString()}</div>
                    <div style={{fontSize: '13px', color: '#666'}}>Categoría B</div>
                  </div>

                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                    <div style={{fontSize: '32px', fontWeight: 700, color: '#ff5722'}}>{totalC.toLocaleString()}</div>
                    <div style={{fontSize: '13px', color: '#666'}}>Categoría C</div>
                  </div>
                </div>
              </div>

              {/* Middle: units text */}
              <div style={{color: '#666', fontSize: '14px'}}>
                {totalUnidades} productos de {maxUnidades} máximo
              </div>

              {/* Bottom: progress bar + percentage marks */}
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <div className="alm-bar-background" style={{width: '100%', height: '12px', borderRadius: '6px', background: '#e0e0e0', overflow: 'hidden'}}>
                  <div className="alm-bar-fill" style={{ width: `${porcentajeOcupacion}%`, height: '100%', background: '#1a1a1a' }}></div>
                </div>
                
                <div style={{display: 'flex', justifyContent: 'space-between', color: '#999', fontSize: '12px'}}>
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* TRES COLUMNAS */}
      <div className="alm-columns">

        {/* CATEGORÍA A */}
        <div className="alm-card-category">
          <div className="alm-cat-header">
            <h4>Productos en Categoría A</h4>
            <span className="alm-badge green">{productosA.length} productos</span>
          </div>

          {stockBajoA > 0 && (
            <div className="alm-alert red">{stockBajoA} producto{stockBajoA > 1 ? 's' : ''} con stock bajo</div>
          )}

          <div className="alm-product-list">
            {productosA.length > 0 ? (
              productosA.map((item, index) => (
                <CardElements
                  key={item.id || index}
                  nombre={`Producto ${item.producto_id}`}
                  codigo={item.producto_id}
                  cantidad={item.trayectoria}
                  ubicacion={item.ubicacion}
                  estado={item.estado}
                  categoria="A"
                  timestamp={item.timestamp}
                />
              ))
            ) : (
              <div style={{textAlign: 'center', padding: '20px', color: '#666'}}>No hay productos en esta categoría</div>
            )}
          </div>

          <div className="alm-total">Total productos: <strong>{totalA}</strong></div>
        </div>

        {/* CATEGORÍA B */}
        <div className="alm-card-category">
          <div className="alm-cat-header">
            <h4>Productos en Categoría B</h4>
            <span className="alm-badge blue">{productosB.length} productos</span>
          </div>

          {stockBajoB > 0 && (
            <div className="alm-alert red">{stockBajoB} producto{stockBajoB > 1 ? 's' : ''} con stock bajo</div>
          )}

          <div className="alm-product-list">
            {productosB.length > 0 ? (
              productosB.map((item, index) => (
                <CardElements
                  key={item.id || index}
                  nombre={`Producto ${item.producto_id}`}
                  codigo={item.producto_id}
                  cantidad={item.trayectoria}
                  ubicacion={item.ubicacion}
                  estado={item.estado}
                  categoria="B"
                  timestamp={item.timestamp}
                />
              ))
            ) : (
              <div style={{textAlign: 'center', padding: '20px', color: '#666'}}>No hay productos en esta categoría</div>
            )}
          </div>

          <div className="alm-total">Total productos: <strong>{totalB}</strong></div>
        </div>

        {/* CATEGORÍA C */}
        <div className="alm-card-category">
          <div className="alm-cat-header">
            <h4>Productos en Categoría C</h4>
            <span className="alm-badge orange">{productosC.length} productos</span>
          </div>

          {stockBajoC > 0 && (
            <div className="alm-alert red">{stockBajoC} producto{stockBajoC > 1 ? 's' : ''} con stock bajo</div>
          )}

          <div className="alm-product-list">
            {productosC.length > 0 ? (
              productosC.map((item, index) => (
                <CardElements
                  key={item.id || index}
                  nombre={`Producto ${item.producto_id}`}
                  codigo={item.producto_id}
                  cantidad={item.trayectoria}
                  ubicacion={item.ubicacion}
                  estado={item.estado}
                  categoria="C"
                  timestamp={item.timestamp}
                />
              ))
            ) : (
              <div style={{textAlign: 'center', padding: '20px', color: '#666'}}>No hay productos en esta categoría</div>
            )}
          </div>

          <div className="alm-total">Total productos: <strong>{totalC}</strong></div>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from "react";
import PageHeader from '../components/common/PageHeader';

export default function Dispensa() {
  // Estado dinámico
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Todas');
  
  const [products] = useState([
    {
      id: 'A-001',
      name: 'Motor Eléctrico 220V',
      category: 'A',
      stock: 45,
      location: 'A-01-05'
    },
    {
      id: 'A-002',
      name: 'Controlador PLC S7-1200',
      category: 'B',
      stock: 23,
      location: 'A-05-03'
    },
    {
      id: 'A-003',
      name: 'Sensor Ultrasónico HC-SR04',
      category: 'A',
      stock: 67,
      location: 'A-03-12'
    }
  ]);

  const [orderQueue] = useState([]);

  const [notifications] = useState([
    {
      message: 'Sistema de Recepción iniciado correctamente',
      time: '22:35:08',
      type: 'info'
    },
    {
      message: 'Conexión con almacén establecida',
      time: '22:36:28',
      type: 'success'
    }
  ]);

  // Handlers
  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleFilterChange = (e) => setFilterCategory(e.target.value);
  const handleStart = () => console.log('Iniciar operación');
  const handleCallRobot = () => console.log('Llamar a Robot');
  const handlePause = () => console.log('Pausar operación');
  const handleAbort = () => console.log('Abortar operación');

  // Filtrar productos
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory === 'Todas' || product.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <PageHeader
        icon="📦"
        title="Gestión de Dispensa"
        subtitle="Solicitar productos y gestionar salidas del almacén"
        userLevel="OPERADOR"
        userLevelNumber="1"
        time="22:40:33"
      />

      {/* CONTENT */}
      <div style={{ padding: "30px" }}>
        
        {/* MAIN GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          
          {/* LEFT - Solicitar Producto */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              🔍 Solicitar Producto del Almacén
            </h3>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Buscar por nombre o código..."
              value={searchTerm}
              onChange={handleSearch}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px',
                marginBottom: '12px',
                boxSizing: 'border-box'
              }}
            />

            {/* Filter Dropdown */}
            <select
              value={filterCategory}
              onChange={handleFilterChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px',
                marginBottom: '20px',
                cursor: 'pointer',
                background: 'white'
              }}
            >
              <option value="Todas">Todas</option>
              <option value="A">Categoría A</option>
              <option value="B">Categoría B</option>
              <option value="C">Categoría C</option>
            </select>

            {/* Products List */}
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {filteredProducts.map((product, index) => (
                <div key={index} style={{
                  padding: '12px',
                  background: '#f8f9fa',
                  borderRadius: '8px',
                  marginBottom: '8px',
                  border: '1px solid #e0e0e0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: '#4caf50',
                      color: 'white',
                      fontSize: '11px',
                      fontWeight: 'bold'
                    }}>
                      {product.category}
                    </span>
                    <span style={{ fontSize: '12px', color: '#666' }}>{product.id}</span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>{product.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666' }}>
                    <span>📦 Stock: {product.stock}</span>
                    <span>📍 {product.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE - Cola de Órdenes */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              🛒 Cola de Órdenes <span style={{
                background: '#e3f2fd',
                color: '#1976d2',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>{orderQueue.length}/3</span>
            </h3>

            {orderQueue.length === 0 ? (
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '60px 20px',
                color: '#999'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🛒</div>
                <div style={{ fontSize: '14px', textAlign: 'center' }}>No hay órdenes en cola</div>
                <div style={{ fontSize: '12px', color: '#bbb', marginTop: '8px' }}>Cree un pedido para comenzar</div>
              </div>
            ) : (
              <div>
                {orderQueue.map((order, index) => (
                  <div key={index} style={{
                    padding: '16px',
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    border: '2px solid #2196f3',
                    marginBottom: '12px'
                  }}>
                    {/* Order content */}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT - Notificaciones */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              🔔 Notificaciones
            </h3>

            {notifications.map((notification, index) => (
              <div key={index} style={{
                padding: '16px',
                background: notification.type === 'success' ? '#d4edda' : '#e3f2fd',
                border: `1px solid ${notification.type === 'success' ? '#4caf50' : '#2196f3'}`,
                borderRadius: '8px',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: notification.type === 'success' ? '#4caf50' : '#2196f3',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  flexShrink: 0
                }}>
                  {notification.type === 'success' ? '✓' : 'ℹ'}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>
                    {notification.message}
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>{notification.time}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Control de Operaciones - Full Width */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600, color: '#666' }}>
            Control de Operaciones de Dispensa
          </h3>
          <p style={{ margin: '0 0 20px 0', fontSize: '13px', color: '#999' }}>
            Se requiere al menos una orden
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={handleStart}
              style={{
                padding: '10px 20px',
                background: '#9e9e9e',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#757575'}
              onMouseLeave={(e) => e.target.style.background = '#9e9e9e'}
            >
              ▶️ Iniciar
            </button>

            <button
              onClick={handleCallRobot}
              style={{
                padding: '10px 20px',
                background: '#2196f3',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#1976d2'}
              onMouseLeave={(e) => e.target.style.background = '#2196f3'}
            >
              🤖 Llamar a Robot
            </button>

            <button
              onClick={handlePause}
              style={{
                padding: '10px 20px',
                background: 'white',
                color: '#333',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f5f5f5';
                e.target.style.borderColor = '#999';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white';
                e.target.style.borderColor = '#ddd';
              }}
            >
              ⏸️ Pausar
            </button>

            <button
              onClick={handleAbort}
              style={{
                padding: '10px 20px',
                background: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#d32f2f'}
              onMouseLeave={(e) => e.target.style.background = '#f44336'}
            >
              🛑 Abortar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

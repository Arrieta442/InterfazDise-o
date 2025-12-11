import Boton from '../components/common/boton';
import Card from "../components/common/Card";
export default function Dashboard() {
  return (
 
    <div style={{
      padding: "40px",
      background: "transparent",
      minHeight: "100vh",
      textAlign: "center"
    }}>

        <div className="emergent-box">
          <h1 className="emergent-title">Sistema de Gestión de Almacén</h1>
        </div>

    <div style={{marginTop: "40px"}} className="box-wrapper"> 
      <Card
        icon="📦"
        title="Nivel de Ocupación"
        value="77%"
        progress={90}
        footer="Alta ocupación"
        iconColor="#0066ff"
        barColor="#ff9900"
      />

      <Card
        icon="🤖"
        title="Robots Activos"
        value={"1 / 5"}
        progress={77}
        footer="En espera"
        iconColor="#0066ff"
        barColor="#ff9900"
      />


      <Card
        icon="📦"
        title="Productos en zona de Dispensa"
        value={"1 / 3 activos"}
        progress={0}
        footer="Sin" //o En proceso
        iconColor="#0066ff"
        barColor="#ff9900"
      />

    <Card
        icon="🏪"
        title="Productos Zona de recepción"
        value={"1 / 2 activos"}
        progress={0}
        footer="En cola" //o En proceso
        iconColor="#0066ff"
        barColor="#ff9900"
      />



    <Card
    icon="🚨"
    title="Alarmas del Sistema"
    value="2 activas"
    progress={20}
    footer="Requiere atención"
    iconColor="#ff3333"
    barColor="#ff0000"
    />

    </div>

    


    {/* Sección del Mapa */}
    <div style={{
      marginTop: "50px",
      width: "100%",
      maxWidth: "1200px",
      margin: "50px auto 0",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      textAlign: "left"
    }}>
      <h2 style={{ color: "#070707ff", marginBottom: "20px", fontSize: "28px", textAlign: "left" }}>Mapa del Almacén</h2>
      <div style={{
        width: "100%",
        height: "400px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        border: "2px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#999",
        fontSize: "18px"
      }}>
        {/* Aquí irá tu mapa - puedes usar Google Maps, Leaflet, etc. */}
        Mapa del Almacén (en desarrollo)
      </div>
    </div>

    {/* Sección Estado del Sistema */}
    <div style={{
      marginTop: "50px",
      width: "100%",
      maxWidth: "1200px",
      margin: "50px auto 0",
      padding: "30px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      border: "1px solid #e0e0e0",
      textAlign: "left"
    }}>
      {/* Título */}
      <h2 style={{
        color: "#000000ff",
        fontSize: "24px",
        fontWeight: "700",
        marginBottom: "30px",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}>
        📊 Estado del Sistema
      </h2>

      {/* Contenedor principal */}
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        
        {/* Columna 1: Estado General */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3 style={{ color: "#555", fontSize: "16px", marginBottom: "15px", fontWeight: "600" }}>
            Estado general:
          </h3>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "15px",
            backgroundColor: "#fffaed",
            borderRadius: "8px",
            border: "1px solid #ffd700"
          }}>
            <div style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#ffa500",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px"
            }}>
              ⚠️
            </div>
            <div>
              <p style={{ margin: "0", color: "#333", fontWeight: "600" }}>Indicador de estado</p>
              <p style={{ margin: "5px 0 0 0", color: "#ff9900", fontSize: "14px", fontWeight: "500" }}>Sistema advertencia</p>
            </div>
          </div>
        </div>

        {/* Columna 2: Alarmas */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3 style={{ color: "#555", fontSize: "16px", marginBottom: "15px", fontWeight: "600" }}>
            Alarmas activas:
          </h3>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px",
            backgroundColor: "#fff5f5",
            borderRadius: "8px",
            border: "1px solid #ffcccc"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "20px" }}>🔴</span>
              <p style={{ margin: "0", color: "#cc0000", fontWeight: "600", fontSize: "14px" }}>Requiere atención</p>
            </div>
            <div style={{
              backgroundColor: "#cc0000",
              color: "white",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: "18px"
            }}>
              2
            </div>
          </div>
        </div>
      </div>

      {/* Última actualización */}
      <div style={{
        marginTop: "20px",
        paddingTop: "20px",
        borderTop: "1px solid #e0e0e0",
        color: "#666",
        fontSize: "14px"
      }}>
        <strong>Última actualización:</strong> 8:42:37
      </div>

      {/* Conexión */}
      <div style={{
        marginTop: "15px",
        padding: "12px 16px",
        backgroundColor: "#e8f5e9",
        borderRadius: "8px",
        border: "1px solid #4caf50",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: "#2e7d32",
        fontWeight: "500"
      }}>
        <span style={{ fontSize: "16px" }}>🟢</span>
        Conexión estable
      </div>
    </div>


          {/* Sección Navegaciones */}
          <div style={{
            marginTop: "40px",
            width: "100%",
            maxWidth: "1200px",
            margin: "40px auto",
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            border: "1px solid #e6e6e6",
            textAlign: "left"
          }}>
            <h2 style={{ color: "#000000ff", fontSize: "20px", marginBottom: "12px" }}>Navegaciones</h2>

            <div style={{ display: "flex", gap: "90px", flexWrap: "wrap" }}>
              <Boton texto="Dispensa" emoji="🚚" destino="/Dispensa" />
              <Boton texto="Recepción" emoji="📦" destino="/Recepcion" />
              <Boton texto="Inventario" emoji="🗄️" destino="/Almacenamiento" />
              <Boton texto="Robots" emoji="🤖" destino="/Robot" />
            </div>
          </div>

      </div>


  );
}
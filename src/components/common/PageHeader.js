import React from "react";
import BackButton from "./BackButton";

export default function PageHeader({ 
  icon = "📦", 
  title, 
  subtitle, 
  userLevel = "OPERADOR",
  userLevelNumber = "1",
  time,
  status,
  statusColor = "#4caf50"
}) {
  return (
    <div style={{
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
            {icon} {title}
          </h2>
          <p style={{margin: '4px 0 0 5px', color: '#666', fontSize: '14px'}}>
            {subtitle}
          </p>
        </div>
      </div>

      <div style={{display: 'flex', gap: '40px', alignItems: 'center'}}>
        <div style={{textAlign: 'right'}}>
          <div style={{fontSize: '12px', color: '#666', marginBottom: '4px'}}>Nivel de Acceso</div>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <strong style={{fontSize: '14px'}}>{userLevel}</strong>
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
            }}>
              {userLevelNumber}
            </span>
          </div>
        </div>

        <div style={{textAlign: 'right', marginRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
          {time && (
            <>
              <div style={{fontSize: '12px', color: '#666', marginBottom: '4px'}}>
                Hora
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <strong style={{fontSize: '16px'}}>{time}</strong>
                {status && (
                  <div style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: statusColor,
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    ● {status}
                  </div>
                )}
              </div>
            </>
          )}
          {!time && status && (
            <div style={{
              padding: '4px 12px',
              borderRadius: '12px',
              background: statusColor,
              color: 'white',
              fontSize: '12px',
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              ● {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

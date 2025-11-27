import "../styles/program.css";

const Program = () => {
    return (
        <div className="program-section">
            <div className="program-content">
                <h2 className="program-title">Información</h2>

                <div className="content-grid">

                    <div className="schedule-column">
                        <div className="schedule-container">
                            <h3 className="schedule-subtitle">Horario del Evento</h3>

                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="time">7:00pm</div>
                                    <div className="event">Recepción de Invitados</div>
                                </div>
                                <div className="timeline-item">
                                    <div className="time">8:00pm</div>
                                    <div className="event">Llegada de los Esposos y Ceremonia Principal</div>
                                </div>
                                <div className="timeline-item">
                                    <div className="time">10:00pm</div>
                                    <div className="event">Cena</div>
                                </div>
                                <div className="timeline-item">
                                    <div className="time">11:30pm</div>
                                    <div className="event">Fiesta con Todos los Invitados</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    <div className="gift-column">
                        <div className="gift-container">
                            <div className="gift-card">
                                <div className="gift-icon">🎁</div>
                                <h3 className="gift-title">Regalos</h3>
                                <div className="gift-content">
                                    <div className="gift-text">
                                        <p>Si deseas hacernos un obsequio, nos haría mucha ilusión que formes parte de nuestro fondo común para comenzar nuestro futuro hogar.</p>
                                    </div>
                                    <div className="gift-details">
                                        <div className="gift-info">
                                            <span className="info-label">💌 Para contribuir:</span>
                                            <span className="info-value">Cuenta BCP: 19138282655047</span>
                                            {/* <span className="info-value">CCI: 00219113828265504758</span> */}
                                            <span className="info-value">Yape/Plin: 954781185</span>
                                        </div>
                                        <div className="gift-info">
                                            <span className="info-value">Maby Esperanza Gavilán Abanto</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Program;
import "../styles/saveTheDate.css";
import M_J_pic from "/src/assets/main_pic.png";

const SaveTheDate = () => {
    return (
        <>
            <div className="save-the-date">
                <div className="couple-names">
                    <h1 style={{fontFamily:"Great Vibes"}}>Maby & Joel</h1>
                </div>

                <div className="couple-photo-container">
                    <img 
                        src={M_J_pic}
                        alt="Maby y Joel"
                        className="couple-photo"
                    />
                </div>

                <div className="content-area">
                    <p className="invitacion-texto">Tenemos el honor de invitarte a nuestra boda que se llevará a cabo el día:</p>
                    <h2>Sábado 20 de Diciembre de 2025</h2>
                </div>
            </div>
        </>
    );
}

export default SaveTheDate;
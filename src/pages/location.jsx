import LocationMap from "../components/locationMap";
import "../styles/location.css";

const Location = () => {
    return (
        <div className="location-section">
            <div className="location-content">
                <div className="location-content-textbox">
                    <h1 className="location-title">Ubicación</h1>
                    {/* <div className="location-details">
                        <p>Salón de Eventos "Luxus"</p>
                        <p>Av. Metropolitana #1326</p>
                        <p>Urb. Las Vegas — Comas</p>
                    </div> */}
                </div>
                <LocationMap />
            </div>
        </div>
    );
}

export default Location;
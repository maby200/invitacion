import { useEffect, useRef } from 'react';
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import '../styles/locationMap.css';

const LocationMap = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    const defaultLocation = [-77.0642, -11.9538];
    const referencePlaces = [-77.0657, -11.9543];
    useEffect(() => {
        // if (map.current) return; // to initialize map only once, but showed issues

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json',
            center: referencePlaces,
            zoom: 14.9,
            // pitch: 45, // Opt tilt
            bearing: 10, // Optrotation
            attributionControl: false
        });

        // Add navigation controls
        map.current.addControl(new maplibregl.NavigationControl());

        // Add marker
        new maplibregl.Marker({
            color: '#d2ac47' // Gold color from your palette
        })
            .setLngLat(defaultLocation)
            .setPopup(new maplibregl.Popup({ offset: 5 })
                .setHTML(`
                    <div class="map-popup">
                        <h3>Aquí te esperamos 😊</h3>
                    </div>
                `))
            .addTo(map.current);

        // Cleanup function
        return () => {
            if (map.current) {
                map.current.remove();
            }
        };
    }, []);

    return (
        <div className="location-map-container">
            <div ref={mapContainer} className="location-map" />
            <div className="map-info">
                <h3>Salón de Eventos "Luxus"</h3>
                <p>Av. Metropolitana #1326</p>
                <p>Urb. Las Vegas — Comas</p>
                <a href="https://maps.app.goo.gl/KwU3Etc8BYTCuAEr5">Ver en GoogleMaps</a>
            </div>
        </div>
    );
};

export default LocationMap;
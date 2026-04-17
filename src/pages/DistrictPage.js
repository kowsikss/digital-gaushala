import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { useState } from "react";
import districtImg from "../assets/districts.jpg";

function DistrictPage() {
  const districts = [
    { name: "Erode", lat: 11.34, lng: 77.72, gaushalas: 28, cows: 4200 },
    { name: "Coimbatore", lat: 11.01, lng: 76.96, gaushalas: 24, cows: 3850 },
    { name: "Madurai", lat: 9.93, lng: 78.12, gaushalas: 22, cows: 3600 },
    { name: "Tiruppur", lat: 11.10, lng: 77.35, gaushalas: 19, cows: 3100 },
    { name: "Salem", lat: 11.66, lng: 78.14, gaushalas: 18, cows: 2900 },
    { name: "Thanjavur", lat: 10.78, lng: 79.13, gaushalas: 17, cows: 2750 },
    { name: "Tiruchirappalli", lat: 10.79, lng: 78.70, gaushalas: 16, cows: 2650 },
    { name: "Vellore", lat: 12.92, lng: 79.13, gaushalas: 11, cows: 1780 },
  ];

  const [selected, setSelected] = useState(districts[0]);

  return (
    <div style={{ padding: "40px", background: "#f8f6f3" }}>
      <div
  className="page-hero"
  style={{ backgroundImage: `url(${districtImg})` }}
>
  <div className="page-hero-content">
    <h1>Across Tamil Nadu</h1>
    <p>Explore gaushalas across districts</p>
  </div>
</div>
      <h1 style={{ color: "#14532d" }}>Across Tamil Nadu</h1>

      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        
        {/* MAP */}
        <MapContainer
          center={[11.5, 78.5]} // Tamil Nadu center
          zoom={7}
          style={{ height: "500px", width: "60%", borderRadius: "12px" }}
          maxBounds={[
            [7.5, 75.5],   // South-West
            [13.5, 80.5],  // North-East
          ]}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {districts.map((d, i) => (
            <CircleMarker
              key={i}
              center={[d.lat, d.lng]}
              radius={selected.name === d.name ? 10 : 6}
              pathOptions={{
                color: selected.name === d.name ? "#f97316" : "#14532d",
                fillColor: selected.name === d.name ? "#f97316" : "#14532d",
                fillOpacity: 1,
              }}
              eventHandlers={{
                click: () => setSelected(d),
              }}
            >
              <Popup>
                <b>{d.name}</b><br />
                {d.gaushalas} Gaushalas<br />
                {d.cows} Cows
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>

        {/* RIGHT PANEL */}
        <div style={{ width: "40%" }}>
          <div
            style={{
              background: "#14532d",
              color: "white",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h2>{selected.name}</h2>

            <p>
              <strong style={{ color: "#f97316" }}>
                {selected.gaushalas}
              </strong>{" "}
              Gaushalas
            </p>

            <p>
              <strong style={{ color: "#f97316" }}>
                {selected.cows}
              </strong>{" "}
              Cows
            </p>
          </div>

          {/* List */}
          <div style={{ marginTop: "20px" }}>
            {districts.map((d, i) => (
              <div
                key={i}
                onClick={() => setSelected(d)}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                  cursor: "pointer",
                }}
              >
                {d.name} — {d.gaushalas} • {d.cows}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DistrictPage;
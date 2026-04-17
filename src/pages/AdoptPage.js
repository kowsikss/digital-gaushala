import { Link } from "react-router-dom";
import "../App.css";

function AdoptPage() {

  const cows = [
    {
      name: "Lakshmi",
      breed: "Kangayam",
      age: "6 years",
      location: "Erode",
      price: "₹500/mo",
      tag: "New",
      image: "https://images.unsplash.com/photo-1601758123927-196c7c0c46a6",
    },
    {
      name: "Muthu",
      breed: "Pulikulam",
      age: "4 years",
      location: "Madurai",
      price: "₹750/mo",
      tag: "Urgent",
      image: "https://images.unsplash.com/photo-1598514982916-67a6d4bbbd2d",
    },
    {
      name: "Ponni",
      breed: "Umbalachery",
      age: "5 years",
      location: "Thanjavur",
      price: "₹600/mo",
      tag: "Sponsored 80%",
      image: "https://images.unsplash.com/photo-1500595046743-ee23c7c1f2ab",
    },
    {
      name: "Kannan",
      breed: "Bargur",
      age: "3 years",
      location: "Erode",
      price: "₹650/mo",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476f",
    },
    {
      name: "Chinna",
      breed: "Native Calf",
      age: "5 months",
      location: "Coimbatore",
      price: "₹450/mo",
      tag: "Recovering",
      image: "https://images.unsplash.com/photo-1606234762045-4c9c0c89f96c",
    },
    {
      name: "Amma",
      breed: "Native Aged",
      age: "16 years",
      location: "Erode",
      price: "₹800/mo",
      tag: "Urgent",
      image: "https://images.unsplash.com/photo-1610564555813-0c8f9f6a45d7",
    },
  ];

  return (
    <div style={{ background: "#1f6f43", color: "white", minHeight: "100vh" }}>
      
      <div style={{ padding: "40px" }}>

        {/* Back */}
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          ← Back to home
        </Link>

        {/* Badge */}
        <div style={{ marginTop: "30px" }}>
          <span style={{
            background: "#2d7f52",
            padding: "8px 16px",
            borderRadius: "20px",
            fontSize: "14px"
          }}>
            ADOPT-A-COW PROGRAMME
          </span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "60px", marginTop: "20px", lineHeight: "1.2" }}>
          Sponsor a real cow.<br />
          <span style={{ color: "#f59e0b" }}>
            Receive monthly updates from her gaushala.
          </span>
        </h1>

        {/* Description */}
        <p style={{ maxWidth: "700px", marginTop: "20px", fontSize: "18px" }}>
          Every cow below is in care at a registered Tamil Nadu gaushala. 
          Your contribution covers her food, medical care, and shelter.
        </p>
      </div>

      {/* WHITE SECTION */}
      <div style={{ background: "#f5f5f5", color: "#000", padding: "40px" }}>
        <h2 style={{ color: "#14532d" }}>Cows looking for sponsors</h2>
        <p>6 cows · 4 gaushalas · across Tamil Nadu</p>

        {/* GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
          marginTop: "30px"
        }}>

          {cows.map((cow, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
            }}>

              {/* IMAGE */}
              <div style={{ position: "relative" }}>
                <img
                  src={cow.image}
                  alt={cow.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />

                {/* TAG */}
                {cow.tag && (
                  <span style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    background:
                      cow.tag === "Urgent" ? "red" :
                      cow.tag === "Recovering" ? "orange" : "#16a34a",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontSize: "12px"
                  }}>
                    {cow.tag}
                  </span>
                )}

                {/* PRICE */}
                <span style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  background: "#fff",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontWeight: "bold"
                }}>
                  {cow.price}
                </span>
              </div>

              {/* CONTENT */}
              <div style={{ padding: "20px" }}>
                <h2 style={{ color: "#14532d" }}>{cow.name}</h2>

                <p style={{ color: "#f97316", fontWeight: "bold" }}>
                  {cow.breed}
                </p>

                <p style={{ fontSize: "14px" }}>
                  📍 {cow.location} • {cow.age}
                </p>

                {/* BUTTON */}
                <button style={{
                  marginTop: "15px",
                  width: "100%",
                  padding: "12px",
                  background: "#f97316",
                  border: "none",
                  color: "white",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}>
                  ❤️ Adopt {cow.name}
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* FOOTER */}
      <footer style={{
        background: "#14532d",
        color: "white",
        padding: "40px"
      }}>
        <h2>Gaushala TN</h2>
        <p style={{ marginTop: "10px" }}>
          A digital initiative to preserve and protect Tamil Nadu's native cattle.
        </p>

        <div style={{ marginTop: "20px" }}>
          <p>📞 1962</p>
          <p>📧 hello@gaushala-tn.gov.in</p>
          <p>📍 Chennai</p>
        </div>

        <p style={{ marginTop: "20px", fontSize: "12px" }}>
          © 2026 Gaushala TN Digital Initiative
        </p>
      </footer>

    </div>
  );
}

export default AdoptPage;
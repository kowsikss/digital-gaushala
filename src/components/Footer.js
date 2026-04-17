import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background: "#1f6f43",
        color: "white",
        padding: "60px 40px 20px",
        marginTop: "50px",
      }}
    >
      {/* TOP SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* LEFT */}
        <div style={{ maxWidth: "300px" }}>
          <h2>
            <span
              style={{
                background: "#f97316",
                padding: "8px 12px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            >
              G
            </span>
            Gaushala TN
          </h2>

          <p style={{ marginTop: "15px", color: "#d1d5db" }}>
            A digital initiative under the National Gokul Mission to preserve,
            protect and uplift Tamil Nadu's gaushalas and native cattle breeds.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 style={{ color: "#f97316" }}>Contact</h3>
          <p>TN Animal Husbandry Helpline: 1962</p>
          <p>
            <a href="mailto:hello@gaushala-tn.gov.in" style={linkStyle}>
              hello@gaushala-tn.gov.in
            </a>
          </p>
          <p>AnimalTradeX, Kotturpuram, Chennai - 600085</p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 style={{ color: "#f97316" }}>Quick Links</h3>

          <Link to="/" style={linkStyle}>Home</Link>

          <a href="#about" style={linkStyle}>About</a>

          <a href="#stakeholders" style={linkStyle}>Stakeholders</a>

          <Link to="/resources" style={linkStyle}>Resources</Link>

          <Link to="/districts" style={linkStyle}>Districts</Link>

          <Link to="/enquiry" style={linkStyle}>Register a Gaushala</Link>
        </div>
      </div>

      {/* DIVIDER */}
      <hr style={{ margin: "40px 0", opacity: 0.3 }} />

      {/* BOTTOM */}
      <p style={{ textAlign: "center", color: "#d1d5db" }}>
        © 2026 Gaushala TN Digital Initiative. Inspired by Mattu Pongal — गौ माता की जय.
      </p>
    </footer>
  );
}

/* 🔥 COMMON LINK STYLE */
const linkStyle = {
  display: "block",
  color: "#d1d5db",
  textDecoration: "none",
  marginTop: "8px",
  cursor: "pointer",
};

export default Footer;
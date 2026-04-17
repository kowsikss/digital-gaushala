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
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* Left */}
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

        {/* Contact */}
        <div>
          <h3 style={{ color: "#f97316" }}>Contact</h3>
          <p>TN Animal Husbandry Helpline: 1962</p>
          <p>hello@gaushala-tn.gov.in</p>
          <p>Chepauk, Chennai 600005</p>
        </div>

        {/* Links */}
        <div>
          <h3 style={{ color: "#f97316" }}>Quick Links</h3>
          <p>About</p>
          <p>Stakeholders</p>
          <p>Resources</p>
          <p>Register a Gaushala</p>
        </div>
      </div>

      {/* Divider */}
      <hr style={{ margin: "40px 0", opacity: 0.3 }} />

      {/* Bottom */}
      <p style={{ textAlign: "center", color: "#d1d5db" }}>
        © 2026 Gaushala TN Digital Initiative. Inspired by Mattu Pongal — गौ माता की जय.
      </p>
    </footer>
  );
}

export default Footer;
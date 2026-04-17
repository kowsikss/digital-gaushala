import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
<header className="navbar"></header>

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 Scroll to About Section
  const handleAboutClick = () => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/"); // go to home first

      setTimeout(() => {
        const section = document.getElementById("about");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById("about");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          🐄 Digital Gaushala TN
        </Link>

        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          type="button"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {/* ✅ UPDATED ABOUT (SCROLL) */}
          <button
            onClick={handleAboutClick}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              font: "inherit",
            }}
          >
            About
          </button>

         <button
  onClick={() => {
    setMenuOpen(false);

    const section = document.getElementById("stakeholders");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  style={{
    background: "none",
    border: "none",
    cursor: "pointer",
    font: "inherit",
  }}
>
  Stakeholders
</button>

          <Link to="/resources" onClick={() => setMenuOpen(false)}>
            Resources
          </Link>

          <Link to="/districts" onClick={() => setMenuOpen(false)}>
            Districts
          </Link>

          {/* ✅ Adopt Button */}
          <Link to="/adopt" onClick={() => setMenuOpen(false)}>
            <button
              style={{
                padding: "10px 20px",
                borderRadius: "20px",
                border: "1px solid #ccc",
                background: "white",
                cursor: "pointer",
              }}
            >
              ❤️ Adopt a Cow
            </button>
          </Link>

          {/* CTA */}
          <Link
            to="/enquiry"
            onClick={() => setMenuOpen(false)}
            className="cta"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
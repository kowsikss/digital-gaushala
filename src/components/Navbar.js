import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 Scroll to About Section
  const handleAboutClick = () => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("about");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById("about");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔥 Scroll to Stakeholders Section
  const handleStakeholdersClick = () => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("stakeholders");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById("stakeholders");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        
        {/* LOGO */}
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          🐄 Digital Gaushala TN
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          type="button"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {/* ABOUT (SCROLL) */}
          <button onClick={handleAboutClick} style={navBtn}>
            About
          </button>

          {/* STAKEHOLDERS (SCROLL) */}
          <button onClick={handleStakeholdersClick} style={navBtn}>
            Stakeholders
          </button>

          <Link to="/resources" onClick={() => setMenuOpen(false)}>
            Resources
          </Link>

          <Link to="/districts" onClick={() => setMenuOpen(false)}>
            Districts
          </Link>

          {/* 🔥 DASHBOARD (EXTERNAL LINK) */}
          <a
            href="https://mymoo-admin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={navLink}
          >
            Dashboard
          </a>

          {/* ADOPT BUTTON */}
          <Link to="/adopt" onClick={() => setMenuOpen(false)}>
            <button style={adoptBtn}>
              ❤️ Adopt a Cow
            </button>
          </Link>

          {/* REGISTER CTA */}
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

/* 🔥 STYLES */
const navBtn = {
  background: "none",
  border: "none",
  cursor: "pointer",
  font: "inherit",
  color: "white",
};

const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};

const adoptBtn = {
  padding: "10px 20px",
  borderRadius: "20px",
  border: "none",
  background: "white",
  color: "#14532d",
  cursor: "pointer",
};

export default Navbar;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import homeImg from "../assets/home.jpg";

function Hero() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `
          linear-gradient(90deg, rgba(20,83,45,0.85), rgba(234,88,12,0.7)),
          url(${homeImg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        padding: "0 80px",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "700px" }}>

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={badge}
        >
          ✦ TAMIL NADU'S INTEGRATED GAUSHALA PLATFORM
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "64px", marginTop: "20px" }}
        >
          Protecting our sacred heritage,{" "}
          <span style={{ color: "#f97316" }}>one cow at a time.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: "20px", fontSize: "18px" }}
        >
          A unified ecosystem connecting gaushalas, vets, donors, NGOs and government.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ marginTop: "30px", display: "flex", gap: "20px" }}
        >
          <Link to="/enquiry">
            <motion.button whileHover={{ scale: 1.1 }} style={btnPrimary}>
              Setup Gaushala
            </motion.button>
          </Link>

          <Link to="/adopt">
            <motion.button whileHover={{ scale: 1.1 }} style={btnOutline}>
              Explore Platform
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

const badge = {
  background: "rgba(255,255,255,0.2)",
  padding: "8px 16px",
  borderRadius: "20px",
  backdropFilter: "blur(10px)",
};

const btnPrimary = {
  padding: "12px 24px",
  background: "#f97316",
  border: "none",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
};

const btnOutline = {
  padding: "12px 24px",
  border: "1px solid white",
  borderRadius: "10px",
  background: "transparent",
  color: "white",
  cursor: "pointer",
};

export default Hero;
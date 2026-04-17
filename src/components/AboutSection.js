import { motion } from "framer-motion";

function AboutSection() {
  return (
    <div
      id="about"
      style={{
        padding: "100px 60px",
        background: "#f8f6f3",
      }}
    >
      {/* Top Label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{
          color: "#f97316",
          letterSpacing: "2px",
          fontSize: "14px",
          marginBottom: "10px",
        }}
      >
        ABOUT THE INITIATIVE
      </motion.p>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          fontSize: "48px",
          color: "#14532d",
          marginBottom: "50px",
        }}
      >
        Where ancient duty meets modern technology
      </motion.h1>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -8 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={cardStyle}
        >
          <div style={iconStyle}>🎯</div>
          <h3 style={titleStyle}>Our Mission</h3>
          <p style={textStyle}>
            Protect, digitise and uplift every gaushala across Tamil Nadu's 38
            districts through technology, transparency and tradition.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -8 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={cardStyle}
        >
          <div style={iconStyle}>⚖️</div>
          <h3 style={titleStyle}>Legal Framework</h3>
          <p style={textStyle}>
            Operating under the National Gokul Mission, TN Animal Preservation
            Act 1958, and NABARD's dairy infrastructure schemes.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -8 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={cardStyle}
        >
          <div style={iconStyle}>🏛️</div>
          <h3 style={titleStyle}>Cultural Heritage</h3>
          <p style={textStyle}>
            Honouring the Pongal–Mattu Pongal tradition and the sacred place of
            the cow in Tamil agrarian life.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

/* 🔥 STYLES */
const cardStyle = {
  flex: "1",
  minWidth: "300px",
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
  borderLeft: "5px solid #f97316",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  cursor: "pointer",
};

const iconStyle = {
  fontSize: "30px",
  color: "#f97316",
};

const titleStyle = {
  color: "#14532d",
  marginTop: "10px",
};

const textStyle = {
  marginTop: "10px",
  color: "#555",
};

export default AboutSection;
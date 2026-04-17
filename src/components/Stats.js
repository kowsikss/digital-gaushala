import CountUp from "react-countup";
import { motion } from "framer-motion";

function Stats() {
  return (
    <div style={{
      background: "#14532d",
      color: "white",
      padding: "60px",
      display: "flex",
      justifyContent: "space-around"
    }}>

      {[ 
        { label: "GAUSHALAS", value: 312 },
        { label: "COWS PROTECTED", value: 48200 },
        { label: "VETERINARIANS", value: 220 }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <h1 style={{ color: "#f97316" }}>
            <CountUp end={item.value} duration={2} />
          </h1>
          <p>{item.label}</p>
        </motion.div>
      ))}

    </div>
  );
}

export default Stats;
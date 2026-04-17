import { motion } from "framer-motion";

function DynamicHero({ title, description, image }) {
  return (
    <motion.div
      className="dynamic-hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="hero-left">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="hero-right">
        <img src={image} alt="hero" />
      </div>
    </motion.div>
  );
}

export default DynamicHero;
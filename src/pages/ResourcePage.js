import { useState } from "react";
import resourceImg from "../assets/resources.jpg";
function ResourcePage() {
  const [activeTab, setActiveTab] = useState("care");

  const data = {
  care: [
    {
      title: "Daily Hygiene",
      desc: "Bathe cattle 2× weekly; clean shed twice daily; provide dry bedding (paddy straw).",
    },
    {
      title: "Shelter Standards",
      desc: "Minimum 40 sq.ft per cow; cross-ventilation; sloped floor for drainage.",
    },
    {
      title: "Hoof & Horn Care",
      desc: "Trim hooves every 4 months; check for foot rot during monsoon.",
    },
    {
      title: "Stress Reduction",
      desc: "Avoid overcrowding; play soft Carnatic music — proven to improve milk yield.",
    },
  ],

  // ✅ NUTRITION (your first image)
  nutrition: [
    {
      title: "Green Fodder",
      desc: "Napier grass, Co-4, lucerne — minimum 25 kg/day per adult cow.",
    },
    {
      title: "Dry Fodder",
      desc: "Paddy straw, sorghum stover — soak in jaggery water for palatability.",
    },
    {
      title: "Concentrate Mix",
      desc: "Cottonseed cake + rice bran + minerals — 2–4 kg/day based on yield.",
    },
    {
      title: "Water",
      desc: "Clean water 60–80 litres/day; mineral lick block always accessible.",
    },
  ],

  // ✅ COW VALUES (your second image)
  values: [
    {
      title: "Panchagavya",
      desc: "Sacred 5-product blend: milk, curd, ghee, gomutra, gobar — used in agriculture and Ayurveda.",
    },
    {
      title: "Cultural Significance",
      desc: "Mattu Pongal honours cattle; Kamadhenu the divine cow appears across Tamil temple sculpture.",
    },
    {
      title: "Economic Value",
      desc: "Dung-based biogas powers 200+ TN villages; vermicompost market worth ₹400 cr.",
    },
    {
      title: "Ecological Role",
      desc: "Indigenous breeds enrich soil microbiome — central to ZBNF (Zero Budget Natural Farming).",
    },
  ],

  // ✅ MEDICINE (your third image)
  medicine: [
    {
      title: "TN Vaccination Schedule",
      desc: "FMD twice yearly (Mar & Sep); HS & BQ before monsoon; Brucella for heifers (4–8 months).",
    },
    {
      title: "Siddha Remedies",
      desc: "Veppilai (neem) decoction for skin; manjal (turmeric) paste for wounds; thuthuvalai for cough.",
    },
    {
      title: "Deworming",
      desc: "Every 3 months for adults, monthly for calves up to 6 months.",
    },
    {
      title: "Emergency Hotline",
      desc: "TN Animal Husbandry: 1962 — free vet dispatch in under 60 minutes.",
    },
  ],

  // ✅ GOVERNMENT SCHEMES (your fourth image)
  schemes: [
    {
      title: "Rashtriya Gokul Mission",
      desc: "100% central funding for breed conservation; up to ₹2 crore per Gokul Gram.",
    },
    {
      title: "Cattle Insurance Scheme",
      desc: "Premium subsidy 50% (general), 70% (SC/ST); covers ₹50,000 per cow.",
    },
    {
      title: "NABARD DEDS",
      desc: "Dairy Entrepreneurship Development — 25% capital subsidy on infrastructure.",
    },
    {
      title: "TN State Gosamrakshana",
      desc: "Annual maintenance grant of ₹30/cow/day for registered gaushalas.",
    },
  ],
};
  return (
    <div style={{ padding: "80px 60px", background: "#f8f6f3", minHeight: "100vh" }}>

         <div
  className="page-hero"
  style={{ backgroundImage: `url(${resourceImg})` }}
>
  <div className="page-hero-content">
    <h1>Resources for cow keepers</h1>
    <p>Practical and vetted information</p>
  </div>
</div>
      
      {/* Heading */}
      <p style={{ color: "#f97316", letterSpacing: "2px" }}>
        KNOWLEDGE BASE
      </p>

      <h1 style={{ fontSize: "48px", color: "#14532d" }}>
        Resources for cow keepers
      </h1>

      <p style={{ marginTop: "10px", color: "#555", maxWidth: "600px" }}>
        Practical, vetted information drawn from veterinary scientists, Siddha practitioners and government circulars.
      </p>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          background: "#eae7e2",
          padding: "10px",
          borderRadius: "12px",
        }}
      >
        {[
          ["care", "Cow Care"],
          ["nutrition", "Nutrition"],
          ["values", "Cow Values"],
          ["medicine", "Medicine"],
          ["schemes", "Government Schemes"],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              background: activeTab === key ? "#14532d" : "transparent",
              color: activeTab === key ? "#fff" : "#14532d",
              fontWeight: "bold",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {data[activeTab].map((item, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              borderLeft: "5px solid #f97316",
              boxShadow: "0 5px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ color: "#14532d" }}>{item.title}</h3>
            <p style={{ marginTop: "10px", color: "#555" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default ResourcePage;
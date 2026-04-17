import { useState } from "react";

function StakeholdersSection() {
  const [active, setActive] = useState("owner");

  const data = {
    owner: {
      title: "Gaushala Owner",
      desc: "Manage operations, herd, finances, and compliance from one dashboard.",
      points: [
        "Daily herd register & feed logs",
        "Volunteer & staff scheduling",
        "Donation receipts (80G) auto-generated",
        "Real-time compliance status",
      ],
    },
    cow: {
      title: "Cow Profile",
      desc: "Track each cow digitally with health, lineage, and RFID.",
      points: [
        "Health history tracking",
        "Breed & lineage records",
        "Vaccination alerts",
        "Unique RFID identity",
      ],
    },
    vet: {
      title: "Veterinary Doctor",
      desc: "Provide medical care and manage treatment schedules.",
      points: [
        "Teleconsultation",
        "Vaccination scheduling",
        "Emergency alerts",
        "Medical records",
      ],
    },
    donor: {
      title: "Donor",
      desc: "Support cows and track impact transparently.",
      points: [
        "Adopt cows",
        "Monthly updates",
        "Donation receipts",
        "Impact tracking",
      ],
    },
    ngo: {
      title: "NGO Partner",
      desc: "Collaborate with gaushalas and scale impact.",
      points: [
        "Program management",
        "Funding support",
        "Impact reports",
        "Volunteer network",
      ],
    },
    gov: {
      title: "Government Body",
      desc: "Monitor compliance and support policies.",
      points: [
        "Data insights",
        "Compliance tracking",
        "Scheme distribution",
        "Policy monitoring",
      ],
    },
  };

  return (
    <div id="stakeholders" style={{ padding: "80px 60px", background: "#f8f6f3" }}>
      
      {/* Heading */}
      <p style={{ color: "#f97316", letterSpacing: "2px" }}>
        INTEGRATED ECOSYSTEM
      </p>

      <h1 style={{ fontSize: "48px", color: "#14532d" }}>
        Six stakeholders, one platform
      </h1>

      <p style={{ marginTop: "10px", color: "#555" }}>
        Click any role to see how the platform serves them — and how they connect.
      </p>

      <div style={{ display: "flex", gap: "40px", marginTop: "40px", flexWrap: "wrap" }}>
        
        {/* LEFT CARDS */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          
          {[
            ["owner", "🏠 Gaushala Owner"],
            ["cow", "❤️ Cow Profile"],
            ["vet", "🩺 Veterinary Doctor"],
            ["donor", "🤝 Donor"],
            ["ngo", "👥 NGO Partner"],
            ["gov", "🏛️ Government Body"],
          ].map(([key, label]) => (
            <div
              key={key}
              onClick={() => setActive(key)}
              style={{
                padding: "20px",
                borderRadius: "12px",
                cursor: "pointer",
                background: active === key ? "#14532d" : "#fff",
                color: active === key ? "#fff" : "#000",
                border: "1px solid #ddd",
                minWidth: "220px",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            minWidth: "300px",
          }}
        >
          <h2 style={{ color: "#14532d" }}>{data[active].title}</h2>
          <p style={{ marginTop: "10px", color: "#555" }}>
            {data[active].desc}
          </p>

          <div style={{ marginTop: "20px" }}>
            {data[active].points.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "10px",
                  marginBottom: "10px",
                  background: "#f1f1f1",
                  borderRadius: "8px",
                }}
              >
                ➜ {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakeholdersSection;
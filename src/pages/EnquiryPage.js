import { useState } from "react";
import registerImg from "../assets/register.jpg";

function EnquiryPage() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    district: "",
    gaushalaName: "",
    land: "",
    cows: "",
    capacity: "",
    vision: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "40px", background: "#f8f6f3", minHeight: "100vh" }}>

      {/* TITLE */}
      <div
  className="page-hero"
  style={{ backgroundImage: `url(${registerImg})` }}
>
  <div className="page-hero-content">
    <h1>Setup your digital gaushala</h1>
    <p>Three quick steps. Free onboarding. Live in two weeks.</p>
  </div>
</div>

      {/* STEP BAR */}
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "40px" }}>
        {[1, 2, 3].map((s) => (
          <div key={s} style={{ textAlign: "center" }}>
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: step >= s ? "#f97316" : "#ddd",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto"
            }}>
              {s}
            </div>
            <p style={{ fontSize: "14px", marginTop: "5px" }}>
              {s === 1 ? "Owner Details" :
               s === 2 ? "Gaushala Info" :
               "Vision & Capacity"}
            </p>
          </div>
        ))}
      </div>

      {/* FORM CARD */}
      <div style={{
        maxWidth: "800px",
        margin: "auto",
        background: "white",
        padding: "30px",
        borderRadius: "10px"
      }}>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <div style={{ display: "flex", gap: "20px" }}>
              <input name="name" placeholder="Full Name *" onChange={handleChange} style={inputStyle} />
              <input name="phone" placeholder="Phone *" onChange={handleChange} style={inputStyle} />
            </div>

            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <input name="email" placeholder="Email" onChange={handleChange} style={inputStyle} />
              <input name="district" placeholder="District *" onChange={handleChange} style={inputStyle} />
            </div>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div style={{ display: "flex", gap: "20px" }}>
              <input name="gaushalaName" placeholder="Gaushala Name *" onChange={handleChange} style={inputStyle} />
              <input name="land" placeholder="Land available (acres)" onChange={handleChange} style={inputStyle} />
            </div>

            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <input name="cows" placeholder="Current cows in care" onChange={handleChange} style={inputStyle} />
              <input name="capacity" placeholder="Target capacity" onChange={handleChange} style={inputStyle} />
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <textarea
              name="vision"
              placeholder="Your vision & primary focus..."
              onChange={handleChange}
              style={{ ...inputStyle, height: "120px" }}
            />

            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
              By submitting, you agree to be contacted by our onboarding team.
            </p>
          </>
        )}

        {/* BUTTONS */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
          
          {step > 1 && (
            <button onClick={() => setStep(step - 1)} style={backBtn}>
              ← Back
            </button>
          )}

          {step < 3 ? (
            <button onClick={() => setStep(step + 1)} style={nextBtn}>
              Next →
            </button>
          ) : (
            <button onClick={() => console.log(form)} style={nextBtn}>
              Submit Enquiry
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

/* STYLES */
const inputStyle = {
  flex: 1,
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const nextBtn = {
  background: "#f97316",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer"
};

const backBtn = {
  background: "#eee",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer"
};

export default EnquiryPage;
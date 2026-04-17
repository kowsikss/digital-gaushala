import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ResourcePage from "./pages/ResourcePage";
import DistrictPage from "./pages/DistrictPage";
import EnquiryPage from "./pages/EnquiryPage";
import AdoptPage from "./pages/AdoptPage";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* ✅ MAIN PAGE */}
        <Route path="/" element={<Home />} />

        {/* ✅ ONLY REAL PAGES */}
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/districts" element={<DistrictPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="/resources" element={<ResourcePage />} />

       
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
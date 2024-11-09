import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import VaultsGrid from "./pages/Vaults";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vaults" element={<VaultsGrid />} />
      </Routes>
    </Router>
  );
}

export default App;

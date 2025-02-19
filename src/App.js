import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import Home from "./intro/Intro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Home from "./intro/Intro";
import Register from "./components/Register";
import Login from "./components/Login";
import { ClerkProvider } from "@clerk/clerk-react";


const clerkKey = "pk_test_aHVtYW5lLWJlYWdsZS0xMi5jbGVyay5hY2NvdW50cy5kZXYk"

function App() {
  return (
    <ClerkProvider publishableKey={clerkKey}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;

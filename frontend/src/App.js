import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Home from "./intro/Intro";
import Register from "./components/Register";
import Login from "./components/Login";
import { ClerkProvider } from "@clerk/clerk-react";


const clerkKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

function App() {
  return (
    <ClerkProvider publishableKey={clerkKey}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </ClerkProvider>
  );
}

export default App;

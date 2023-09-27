import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Other from "./components/Other/Other";
import Protected from "./components/Protected";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pass" element={<Protected component={<Other />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

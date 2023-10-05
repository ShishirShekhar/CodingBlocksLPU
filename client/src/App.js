import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Other from "./components/Other/Other";
import Protected from "./components/Protected";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <div>
      <motion.div
        className="cursor bg-primary w-8 h-8 rounded-full fixed top-0 left-0"
        variants={variants}
        animate="default"
      />
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

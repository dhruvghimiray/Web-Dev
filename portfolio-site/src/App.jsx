import { useState } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import { Projects } from "./pages/Projects.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Projects />
    </>
  );
}

export default App;

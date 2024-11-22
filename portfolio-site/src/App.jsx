import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Projects } from "./pages/projects";
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

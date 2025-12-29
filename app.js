import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isOpen, setIsOspen] = useState(false);

  function togglePanel() {
    setIsOspen((prev) => !prev);
  }

  return (
    <div className="container">
      <button onClick={togglePanel}>
        {isOpen ? "Close panel" : "Open panel"}
      </button>
      {isOpen && (
        <div className="panel">
          <h2>Panel content</h2>
          <p>This panel is shown only when state is true.</p>
        </div>
      )}
    </div>
  );
}

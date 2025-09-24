import { useState } from "react";
import Calendar from "./components/Calendar";
import BookingFormModal from "./components/BookingFormModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header
        style={{ padding: "1rem", background: "#1976d2", color: "white" }}
      >
        <h1 style={{ margin: 0 }}>Car Scheduling App</h1>
      </header>

      <main style={{ flex: 1 }}>
        <Calendar />
      </main>

      {/* Floating button */}
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "2rem",
          background: "#1976d2",
          color: "white",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
        }}
      >
        +
      </button>

      {/* Popup modal */}
      <BookingFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;

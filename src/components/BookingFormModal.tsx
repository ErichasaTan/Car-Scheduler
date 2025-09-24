import Modal from "react-modal";
import { useState } from "react";
import { bookingStore } from "../stores/BookingStore";
import { v4 as uuidv4 } from "uuid";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

// Bind modal to the app root (needed for accessibility)
Modal.setAppElement("#root");

const BookingFormModal = ({ isOpen, onClose }: Props) => {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !reason || !startTime || !endTime) {
      alert("Please fill in all fields");
      return;
    }

    bookingStore.addBooking({
      id: uuidv4(),
      name,
      reason,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    });

    // Reset and close
    setName("");
    setReason("");
    setStartTime("");
    setEndTime("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Booking"
      style={{
        content: {
          maxWidth: "400px",
          margin: "auto",
          borderRadius: "8px",
          padding: "1.5rem",
        },
      }}
    >
      <h2>Add Booking</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
      >
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <label>Start time:</label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <label>End time:</label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <button
          type="submit"
          style={{
            marginTop: "1rem",
            background: "#1976d2",
            color: "white",
            padding: "0.5rem",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Save
        </button>
        <button type="button" onClick={onClose} style={{ marginTop: "0.5rem" }}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default BookingFormModal;

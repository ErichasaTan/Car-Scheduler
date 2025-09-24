import { useState } from "react";
import { bookingStore } from "../stores/BookingStore";
import { v4 as uuidv4 } from "uuid"; // to generate unique IDs


const BookingForm = () => {
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
      start: new Date(startTime),
      end: new Date(endTime),
    });

    // reset form
    setName("");
    setReason("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
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
      <input
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        type="datetime-local"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <button type="submit">Add Booking</button>
    </form>
  );
};

export default BookingForm;

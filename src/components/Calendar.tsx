import { observer } from "mobx-react-lite";
import { bookingStore } from "../stores/BookingStore";

const Calendar = observer(() => {
  return (
    <div>
      <h2>Bookings</h2>
      {bookingStore.bookings.length === 0 && <p>No bookings yet.</p>}
      <ul>
        {bookingStore.bookings.map((b) => (
          <li key={b.id}>
            {b.name} ({b.reason}) — {b.startTime.toLocaleString()} to{" "}
            {b.endTime.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Calendar;

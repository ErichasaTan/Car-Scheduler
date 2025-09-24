import { observer } from "mobx-react-lite";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { bookingStore } from "../stores/BookingStore";

// Setup localizer (required for react-big-calendar to know how to handle dates)
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

const Calendar = observer(() => {
  // Convert MobX bookings into events for react-big-calendar
  const events = bookingStore.bookings.map((b) => ({
    id: b.id,
    title: `${b.name} (${b.reason})`,
    start: b.start,
    end: b.end,
  }));

  return (
    <div style={{ height: "80vh", marginTop: "1rem" }}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        views={["day", "week", "month"]}
        step={30}
        timeslots={2}
        style={{ height: "100%" }}
        toolbar={false}
      />
    </div>
  );
});

export default Calendar;

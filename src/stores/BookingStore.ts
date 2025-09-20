// makeAutoObservable makes all the properties (bookings) and functions (addBooking) automatically observable.
import { makeAutoObservable } from "mobx";

// Define the structure of a booking; each booking must have a unique ID, name, reason, start time, and end time.
export interface Booking {
  id: string;
  name: string;
  reason: string;
  startTime: Date;
  endTime: Date;
}

// Class called BookingStore to manage the state of bookings.
class BookingStore {
  // an array of Booking objects, this will act as our 'database' in memory.
  bookings: Booking[] = [];

  // The constructor runs when we create a new BookingStore instance.
  // makeAutoObservable(this) tells MobX:
  // Watch all properties (bookings)
  // Watch all functions (addBooking)
  // whenever something changes, update any components that use this store.
  constructor() {
    makeAutoObservable(this);
  }

  // Method to add a new booking.
  // It checks for time conflicts before adding.
  addBooking(booking: Booking) {
    const hasConflict = this.bookings.some(
      (b) => booking.startTime < b.endTime && booking.endTime > b.startTime
    );

    // If there's a conflict, we alert the user and don't add the booking.
    if (hasConflict) {
      alert("Time slot already booked!");
      return;
    }

    // If no conflict, we add the booking to our array.
    this.bookings.push(booking);
  }
}

// Export a single instance of BookingStore to be used throughout the app.
export const bookingStore = new BookingStore();

# 🚗 Car Scheduler

A simple car scheduling application built with **React**, **TypeScript**, **MobX**, and **React Big Calendar**.  
Users can book time slots (with name and reason), and events are displayed in a calendar view. Bookings cannot overlap visually, making it easy to manage car usage.

---

## ✨ Features
- 📅 Calendar interface (day, week, month views) using `react-big-calendar`.
- ⏰ Real-time indicator showing the current time.
- 📝 Add bookings with name, reason, date, and start/end times.
- 🔒 Prevents overlapping display of bookings.
- 🎨 Modal form with clean design.
- ⌛ Start/end times limited to **15-minute intervals**.

---

## 🛠 Tech Stack
- **React** + **TypeScript** (frontend framework)
- **MobX** (state management)
- **React Big Calendar** (calendar UI)
- **React Modal** (booking form popup)
- **UUID** (unique booking IDs)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/car-scheduler.git
cd car-scheduler
```

### 2. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm start
```

## Project Structure
src/  
├── components/  
│   ├── BookingFormModal.tsx   # Modal form for adding bookings  
│   └── CalendarView.tsx       # Calendar component  
├── stores/  
│   └── BookingStore.ts        # MobX store for managing bookings  
├── App.tsx                    # Main app component  
└── index.tsx                  # Entry point  

## TODO / Future Improvements
🔔 Notifications/reminders for bookings  
🗑 Ability to edit or delete existing bookings  
👥 Multi-user support with authentication  
🚀 Deploy the app to a hosting platform (e.g., Vercel, Netlify, or GitHub Pages)  

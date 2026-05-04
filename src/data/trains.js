// src/data/trains.js

const trains = [
  {
    id: "1",
    number: "064К",
    route: { from: "Львів", to: "Харків" },
    departure: "2026-05-10T04:30:00",
    arrival: "2026-05-10T12:15:00",
    durationMinutes: 465,
    wagons: [
      { number: 1, type: "Люкс", capacity: 18, price: 900, bookedSeats: [] },
      { number: 2, type: "Купе", capacity: 36, price: 450, bookedSeats: [] },
      { number: 3, type: "Купе", capacity: 36, price: 450, bookedSeats: [] },
      { number: 4, type: "Плацкарт", capacity: 54, price: 300, bookedSeats: [] },
      { number: 5, type: "Плацкарт", capacity: 54, price: 300, bookedSeats: [] }
    ],
    train_type: "Ранній рейс"
  },
  {
    id: "2",
    number: "712К",
    route: { from: "Львів", to: "Харків" },
    departure: "2026-05-10T06:50:00",
    arrival: "2026-05-10T13:40:00",
    durationMinutes: 410,
    wagons: [
      { number: 1, type: "Люкс", capacity: 18, price: 1500, bookedSeats: [] },
      { number: 2, type: "Купе", capacity: 36, price: 800, bookedSeats: [] },
      { number: 3, type: "Купе", capacity: 36, price: 800, bookedSeats: [] },
      { number: 4, type: "Плацкарт", capacity: 54, price: 450, bookedSeats: [] },
      { number: 5, type: "Плацкарт", capacity: 54, price: 450, bookedSeats: [] }
    ],
    train_type: "Інтерсіті+"
  },
  {
    id: "3",
    number: "091К",
    route: { from: "Львів", to: "Харків" },
    departure: "2026-05-10T21:15:00",
    arrival: "2026-05-11T06:20:00",
    durationMinutes: 545,
    wagons: [
      { number: 1, type: "Люкс", capacity: 18, price: 1100, bookedSeats: [] },
      { number: 2, type: "Купе", capacity: 36, price: 550, bookedSeats: [] },
      { number: 3, type: "Купе", capacity: 36, price: 550, bookedSeats: [] },
      { number: 4, type: "Плацкарт", capacity: 54, price: 280, bookedSeats: [] },
      { number: 5, type: "Плацкарт", capacity: 54, price: 280, bookedSeats: [] }
    ],
    train_type: "Нічний рейс"
  }
];

export default trains;
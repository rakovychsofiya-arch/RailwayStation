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
  },
  {
    id: "4",
    number: "743Л",
    route: { from: "Львів", to: "Київ" },
    departure: "2026-05-10T06:20:00",
    arrival: "2026-05-10T11:55:00",
    durationMinutes: 335,
    wagons: [
      { number: 1, type: "1 клас", capacity: 60, price: 1100, bookedSeats: [] },
      { number: 2, type: "1 клас", capacity: 60, price: 1100, bookedSeats: [] },
      { number: 3, type: "2 клас", capacity: 90, price: 650, bookedSeats: [] },
      { number: 4, type: "2 клас", capacity: 90, price: 650, bookedSeats: [] },
      { number: 5, type: "2 клас", capacity: 90, price: 650, bookedSeats: [] }
    ],
    train_type: "Інтерсіті+"
  },
  {
    id: "5",
    number: "012Л",
    route: { from: "Київ", to: "Одеса" },
    departure: "2026-05-10T23:55:00",
    arrival: "2026-05-11T08:10:00",
    durationMinutes: 495,
    wagons: [
      { number: 1, type: "Люкс", capacity: 18, price: 1800, bookedSeats: [] },
      { number: 2, type: "Купе", capacity: 36, price: 920, bookedSeats: [] },
      { number: 3, type: "Купе", capacity: 36, price: 920, bookedSeats: [] },
      { number: 4, type: "Купе", capacity: 36, price: 920, bookedSeats: [] },
      { number: 5, type: "Купе", capacity: 36, price: 920, bookedSeats: [] }
    ],
    train_type: "Нічний Експрес"
  },
  {
    id: "6",
    number: "079П",
    route: { from: "Дніпро", to: "Київ" },
    departure: "2026-05-10T22:10:00",
    arrival: "2026-05-11T06:45:00",
    durationMinutes: 515,
    wagons: [
      { number: 1, type: "Купе", capacity: 36, price: 600, bookedSeats: [] },
      { number: 2, type: "Купе", capacity: 36, price: 600, bookedSeats: [] },
      { number: 3, type: "Плацкарт", capacity: 54, price: 320, bookedSeats: [] },
      { number: 4, type: "Плацкарт", capacity: 54, price: 320, bookedSeats: [] },
      { number: 5, type: "Плацкарт", capacity: 54, price: 320, bookedSeats: [] }
    ],
    train_type: "Нічний швидкий"
  },
  {
    id: "7",
    number: "007Ш",
    route: { from: "Київ", to: "Ужгород" },
    departure: "2026-05-10T19:50:00",
    arrival: "2026-05-11T07:20:00",
    durationMinutes: 690,
    wagons: [
      { number: 1, type: "Люкс", capacity: 18, price: 2100, bookedSeats: [] },
      { number: 2, type: "Купе", capacity: 36, price: 1050, bookedSeats: [] },
      { number: 3, type: "Купе", capacity: 36, price: 1050, bookedSeats: [] },
      { number: 4, type: "Купе", capacity: 36, price: 1050, bookedSeats: [] },
      { number: 5, type: "Плацкарт", capacity: 54, price: 420, bookedSeats: [] }
    ],
    train_type: "Нічний Експрес"
  },
  {
    id: "8",
    number: "715Л",
    route: { from: "Київ", to: "Перемишль" },
    departure: "2026-05-10T11:01:00",
    arrival: "2026-05-10T20:25:00",
    durationMinutes: 564,
    wagons: [
      { number: 1, type: "1 клас", capacity: 60, price: 1450, bookedSeats: [] },
      { number: 2, type: "2 клас", capacity: 90, price: 980, bookedSeats: [] },
      { number: 3, type: "2 клас", capacity: 90, price: 980, bookedSeats: [] },
      { number: 4, type: "2 клас", capacity: 90, price: 980, bookedSeats: [] },
      { number: 5, type: "2 клас", capacity: 90, price: 980, bookedSeats: [] }
    ],
    train_type: "Інтерсіті+"
  }
];

export default trains;
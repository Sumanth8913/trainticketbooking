import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  coach = [];

  constructor() {
    this.initializeSeats();
  }

  initializeSeats() {
    let seatNumber = 1;
    for (let row = 1; row <= 11; row++) {
      const rowSeats = [];
      const seatLimit = row === 11 ? 3 : 7; // Last row has only 3 seats
      for (let seat = 1; seat <= seatLimit; seat++) {
        rowSeats.push({ row: row, seat: seat, booked: false });
      }
      this.coach.push(rowSeats);
    }
  }

  bookSeats(numberOfSeats: number) {
    let seatsToBook = numberOfSeats;
    for (let row of this.coach) {
      const availableSeats = row.filter((seat) => !seat.booked);
      if (availableSeats.length >= seatsToBook) {
        for (let i = 0; i < seatsToBook; i++) {
          availableSeats[i].booked = true;
        }
        break;
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-conference',
  imports: [CommonModule,RouterModule],
  templateUrl: './conference.html',
  styleUrl: './conference.css',
    standalone: true,

})
export class Conference implements OnInit {

  // 🔹 Countdown
  targetDate = new Date('2026-11-01T00:00:00');

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  // 🔹 Schedule
  activeDay = 0;

  daysData = [
    {
      label: '1st November',
      schedule: [
        { time: '08:00 - 09:00', event: 'Registration & Welcome' },
        { time: '09:00 - 10:00', event: 'Opening Ceremony' },
        { time: '10:00 - 11:00', event: 'Keynote Speech' }
      ]
    },
    {
      label: '2nd November',
      schedule: [
        { time: '08:30 - 09:30', event: 'Workshop: Innovation in Agriculture' },
        { time: '09:30 - 11:00', event: 'Panel Discussion' }
      ]
    },
    {
      label: '3rd November',
      schedule: [
        { time: '09:00 - 10:30', event: 'Research Presentations' },
        { time: '11:00 - 12:00', event: 'Networking Session' }
      ]
    },
    {
      label: '4th November',
      schedule: [
        { time: '09:00 - 10:00', event: 'Closing Remarks' },
        { time: '10:00 - 12:00', event: 'Field Visit' }
      ]
    }
  ];

  ngOnInit() {
    this.updateCountdown();

    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    this.minutes = Math.floor((distance / 1000 / 60) % 60);
    this.seconds = Math.floor((distance / 1000) % 60);
  }

  setDay(index: number) {
    this.activeDay = index;
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home {

  events$: Observable<any[]>;
  completedEvents$: Observable<any[]>;

  constructor(private http: HttpClient, private router: Router) {

    const api$ = this.http.get<any[]>('https://41.59.225.78:8443/api/admin/events');

    this.events$ = api$;

    // Example split (adjust logic if needed)
    this.completedEvents$ = api$.pipe(
      map(events => events.filter(e => new Date(e.endDate) < new Date()))
    );
  }

  showEvents = false;

  toggleEvents() {
    this.showEvents = !this.showEvents;
  }

  goToRegister(event: any) {
    this.router.navigate(['/details', event.id]);
  }
}
import { Component } from '@angular/core';
import { Sidebar } from '../../../layout/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-eventregistered-details',
  imports: [Sidebar, CommonModule, FormsModule],
  templateUrl: './eventregistered-details.html',
  styleUrl: './eventregistered-details.css',
})
export class EventregisteredDetails {

  eventId = '1';

  events$: Observable<any[]>;
  completedEvents$: Observable<any[]>;

  constructor(private http: HttpClient) {

    this.events$ = this.http.get<any[]>(
      `https://events.tari.go.tz/api/admin/registrations?eventId=${this.eventId}`
    );

    this.completedEvents$ = this.events$.pipe(
      map(events =>
        events.filter(
          e => new Date(e.endDate) < new Date()
        )
      )
    );
  }
}
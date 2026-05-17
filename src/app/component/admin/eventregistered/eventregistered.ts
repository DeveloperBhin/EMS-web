import { Component } from '@angular/core';
import { Sidebar } from '../../../layout/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-eventregistered',
  imports: [Sidebar, CommonModule, FormsModule],
  templateUrl: './eventregistered.html',
  styleUrl: './eventregistered.css',
})
export class Eventregistered {



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

}




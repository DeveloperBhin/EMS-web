import { Component,AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Sidebar } from '../../../layout/sidebar/sidebar';
import { Chart } from 'chart.js/auto';



@Component({
  selector: 'app-admin',
  imports: [CommonModule, Sidebar],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
  standalone:true,
})
export class Admin implements AfterViewInit  {

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
   ngAfterViewInit(): void {
    new Chart('eventsChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Events Created',
            data: [12, 19, 8, 15, 22, 30],
            backgroundColor: '#11732e'
          },
          {
            label: 'Participants',
            data: [50, 80, 60, 120, 150, 200],
            backgroundColor: '#facc15'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }
}


 

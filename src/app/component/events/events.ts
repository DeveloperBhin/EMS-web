import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [CommonModule,RouterModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
  standalone:true,

})

export class Events implements OnInit {

  events: any[] = [];
completedevents: any[] = [];
  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.getUpcomingEvents();
    this.getCompletedEvents();

    console.log("Calling API...");

  }
  getUpcomingEvents() {
    this.http.get<any[]>('http://localhost:8080/api/admin/events/upcoming')
      .subscribe({
        next: (res) => {
                  console.log("Response:", res); // ✅ VERY IMPORTANT

          this.events = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

 
  getCompletedEvents() {
    this.http.get<any[]>('http://localhost:8080/api/admin/events/completed')
      .subscribe({
        next: (res) => {
                  console.log("Response:", res); 

          this.completedevents = res;
        },
        error: (err) => {  
          console.error(err);
        }
      });
  }



  showEvents = false;

toggleEvents() {
  this.showEvents = !this.showEvents;
}
goToRegister(event: any) {
  this.router.navigate(['/details', event.id]);
}

}

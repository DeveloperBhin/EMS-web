import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
  standalone: true,
})

export class Details implements OnInit {

  events$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.events$ = this.http.get<any>(
      `https://41.59.225.78:8443/api/admin/events/${id}`
    );
  }

  showEvents = false;

  toggleEvents() {
    this.showEvents = !this.showEvents;
  }

  goToRegister(event: any) {
    this.router.navigate(['/registration', event.id]);
  }
}





    


 



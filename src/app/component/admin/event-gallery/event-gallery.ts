import { Component, OnInit } from '@angular/core';
import { Sidebar } from '../../../layout/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Title } from 'chart.js';

@Component({
  selector: 'app-event-gallery',
  imports: [Sidebar, CommonModule, FormsModule],
  templateUrl: './event-gallery.html',
  styleUrl: './event-gallery.css',
})
export class EventGallery  implements OnInit  {

event: any;

constructor(
  private route: ActivatedRoute,
  private http: HttpClient,
  private router: Router
) {}

eventId!: string;

ngOnInit() {
  this.eventId = this.route.snapshot.paramMap.get('id')!;

  this.http.get(`http://localhost:8080/api/admin/events/${this.eventId}`)
    .subscribe(res => {
      this.event = res;
            console.log("Event loaded:", res);

    });
}
goToPayments(event: any) {
  this.router.navigate(['/payment', event.id]);
}
goToDetails(event: any) {
  this.router.navigate(['/details', event.id]);
}

formData = {
  title: '',
  description: '',
  category: '',
  featuredImage: '',
  eventLink: '',
  startdate: '',
  enddate: '',
  location: '',
  timezone: '',
  type: '',
  agreed: false
};

isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9+\-\s]{9,15}$/;
  return phoneRegex.test(phone);
}

submitForm() {

  if (!this.formData.title) {
    alert("Event title is required");
    return;
  }

  if (!this.formData.description) {
    alert("Event description is required");
    return;
  }

  if (!this.formData.eventLink) {
    alert("Event link is required");
    return;
  }

   if (!this.formData.timezone) {
    alert("Event timezone is required");
    return;
  }

  if (!this.formData.type) {
    alert("Event type is required");
    return;
  }
   if (!this.formData.location) {
    alert("Event location is required");
    return;
  }

  if (!this.isValidPhone(this.formData.category)) {
    alert("Enter a valid category");
    return;
  }

  if (!this.isValidPhone(this.formData.startdate) || !this.isValidPhone(this.formData.enddate)) {
    alert("Enter a valid date");
    return;
  }


  // if (this.formData.email && !this.isValidEmail(this.formData.email)) {
  //   alert("Enter a valid email address");
  //   return;
  // }

  if (!this.formData.featuredImage) {
    alert("Enter a valid image URL");
    return;
  }

  const payload = {
    Title: this.formData.title,
    Description: this.formData.description,
    category: this.formData.category,
    featuredImage: this.formData.featuredImage,
    eventLink: this.formData.eventLink,
    shirtSize: this.formData.startdate,
    location: this.formData.location,
    timezone: this.formData.timezone,
    type: this.formData.type,
    status: "PENDING"
  };


this.http.post(`http://localhost:8080/api/admin/registrations?eventId=${this.eventId}`, payload)    .subscribe({
      next: (res: any) => {
        console.log("Registration successful:", res);
        this.router.navigate(['/payment', res.id]);
      },
      error: (err) => {
        console.error(err);
        alert("Failed to submit registration");
      }
    });
}
}


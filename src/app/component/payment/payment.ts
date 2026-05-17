// import { Component,OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
// import { FormsModule } from '@angular/forms';


// @Component({
//   selector: 'app-payment',
//   imports: [CommonModule,FormsModule],
//   templateUrl: './payment.html',
//   styleUrl: './payment.css',
//   standalone:true,
// })
// export class Payment implements OnInit{

// event: any;

// constructor(
//   private route: ActivatedRoute,
//   private http: HttpClient,
//   private router: Router
// ) {}

// ngOnInit() {
//   const id = this.route.snapshot.paramMap.get('id');

//   this.http.get(`http://localhost:8080/api/admin/events/${id}`)
//     .subscribe(res => {
//       this.event = res;
//       console.log("Event loaded:", res);
//     });
// }
// goToPayments(event: any) {
//   this.router.navigate(['/payment', event.id]);
// }
// goToDetails(event: any) {
//   this.router.navigate(['/details', event.id]);
// }

// formData = {
//   name: '',
//   phone: '',
//   email: '',
//   age: '',
//   tshirtSize: '',
//   pickupLocation: '',
//   raceType: '',
//   agreed: false
// };
// submitForm() {
//   if (!this.formData.name || !this.formData.phone || !this.formData.agreed) {
//     alert("Please fill all required fields and accept terms");
//     return;
//   }

//   console.log("Valid:", this.formData);
// }

// selectedFile: File | null = null;

// onFileSelected(event: any) {
//   this.selectedFile = event.target.files[0];
//   console.log("Selected file:", this.selectedFile);
// }
// submitRegistration() {
//   if (!this.selectedFile) {
//     alert("Please upload proof of payment");
//     return;
//   }

//   const formData = new FormData();
//   formData.append('file', this.selectedFile); // ✅ MUST be 'file'

//   const registrationId = this.route.snapshot.paramMap.get('id');

//   this.http.post(`http://localhost:8080/api/admin/registrations/complete/${registrationId}`, formData)
//     .subscribe({
//       next: (res) => {
//         console.log("Completed:", res);
//         alert("Payment uploaded successfully!");
//         this.router.navigate(['/']);
//       },
//       error: (err) => {
//         console.error(err);
//         alert("Upload failed");
//       }
//     });
// }
// }



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../env';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment implements OnInit {

  event: any = null;
  selectedFile: File | null = null;

  formData = {
    name: '',
    phone: '',
    email: '',
    age: '',
    tshirtSize: '',
    pickupLocation: '',
    raceType: '',
    agreed: false
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      alert('Invalid event ID');
      this.router.navigate(['/']);
      return;
    }

    this.http.get(`${environment.apiUrl}/api/admin/events/${id}`)
      .subscribe({
        next: (res) => {
          this.event = res;
          console.log('Event loaded:', res);
        },
        error: (err) => {
          console.error('Failed to load event:', err);
          alert('Could not load event');
        }
      });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('Selected file:', this.selectedFile);
  }

  submitRegistration() {

    if (!this.selectedFile) {
      alert('Please upload proof of payment');
      return;
    }

    const registrationId = this.route.snapshot.paramMap.get('id');

    if (!registrationId) {
      alert('Missing registration ID');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post(
      `${environment.apiUrl}/api/admin/registrations/complete/${registrationId}`,
      formData
    ).subscribe({
      next: (res: any) => {
        console.log('Payment completed:', res);
        alert('Payment uploaded successfully');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        alert('Upload failed');
      }
    });
  }

  goToDetails(event: any) {
    this.router.navigate(['/details', event.id]);
  }

  goToPayments(event: any) {
    this.router.navigate(['/payment', event.id]);
  }
}

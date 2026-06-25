// import { Component,OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { Observable } from 'rxjs';

// import { Country, State } from 'country-state-city';
// @Component({
//   selector: 'app-registration',
//   imports: [CommonModule,FormsModule],
//   templateUrl: './registration.html',
//   styleUrl: './registration.css',
//   standalone:true,
// })
// export class Registration implements OnInit  {

// events$!: Observable<any[]>;
// countries: any[] = [];
// regions: any[] = [];
// constructor(
//   private route: ActivatedRoute,
//   private http: HttpClient,
//   private router: Router
// ) {
//   const currentYear = new Date().getFullYear();
//   for (let y = currentYear; y >= 1900; y--) {
//     this.years.push(y);
//   }
// }
//  countryList: string[] = [];

  
// activeTab: 'jisajili' | 'kikundi' | 'changia' = 'jisajili';
// eventId!: string;

// ngOnInit() {
//   this.eventId = this.route.snapshot.paramMap.get('id')!;

// const api$ = this.http.get<any>(
//   `http://41.59.225.78:8088/api/admin/events/${this.eventId}`
// );
//     this.events$ = api$;

//   // this.http.get(`http://41.59.225.78:8088/api/admin/events/${this.eventId}`)
                  
//   //   .subscribe(res => {
//   //     this.event = res;
//   //           console.log("Event loaded:", res);

//   //   });

//    this.countries = Country.getAllCountries();
//      this.phoneCountries = Country.getAllCountries();

// }

// // when user selects country
// onCountryChange(countryCode: string) {
//   this.regions = State.getStatesOfCountry(countryCode);
// }
// goToPayments(event: any) {
// this.router.navigate(['/payment', this.eventId]);}
// goToDetails(event: any) {
//   this.router.navigate(['/details', event.id]);
// }

// phoneCountries: any[] = [];
// selectedDial = '+1';
// onPhoneCountryChange(countryCode: string) {
//   const country = this.phoneCountries.find(c => c.isoCode === countryCode);

//   this.selectedDial = country?.phonecode
//     ? `+${country.phonecode}`
//     : '+1';

//   this.buildFullPhone();
// }

// formData: any = {
//   name: '',
//   phone: '',
//   email: '',
//   age: '',
//   yearOfBirth: '',
//   group: '',
//   location: '',
//   amount: '',
//   paymentMethod: '',
//   raceType: '',
//   tshirtSize: '',
//   pickupLocation: '',
//   country :'',
//   region: '',
//   Gender:'',
//     phoneCountry: 'TZ',
//   fullPhone: '',
   
//   agreed: false
// };
// years: number[] = [];
// buildFullPhone() {
//   this.formData.fullPhone = `${this.selectedDial}${this.formData.phone}`;
// }


// amount: number = 0;
// formattedAmount: string = '';

// onAmountInput(event: any) {
//   let value = event.target.value;

//   // remove commas
//   value = value.replace(/,/g, '');

//   // allow only numbers
//   if (isNaN(value)) return;

//   this.amount = Number(value);

//   // format with commas
//   this.formattedAmount = this.amount
//     ? this.amount.toLocaleString()
//     : '';
// }


// isValidEmail(email: string): boolean {
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// isValidPhone(phone: string): boolean {
//   const phoneRegex = /^[0-9+\-\s]{9,15}$/;
//   return phoneRegex.test(phone);
// }

// submitForm() {

//   if (!this.formData.name) {
//     alert("Name is required");
//     return;
//   }

//   if (!this.isValidPhone(this.formData.phone)) {
//     alert("Enter a valid phone number");
//     return;
//   }

//   if (this.formData.email && !this.isValidEmail(this.formData.email)) {
//     alert("Enter a valid email address");
//     return;
//   }

//   if (!this.formData.agreed) {
//     alert("You must accept the terms");
//     return;
//   }

 

   
//     const payload = {
//       fullname: this.formData.name,
//       phone: this.formData.phone,
//       email: this.formData.email,
//       age: this.formData.age,
//       shirtSize: this.formData.tshirtSize,
//       raceType: this.formData.raceType,
//       location: this.formData.pickupLocation,
//       status: "PENDING"
//     };

//     this.http.post(
//       `http://41.59.225.78:8088/api/admin/registrations?eventId=${this.eventId}`,
//       payload
//     ).subscribe({
//       next: (res: any) => {
//         this.router.navigate(['/payment', res.id]);
//       },
//       error: () => {
//         alert("Failed to submit registration");
//       }
//     });
//   }
// }







import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Country, State } from 'country-state-city';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration implements OnInit {
event: any = null;
  events$!: Observable<any>;
  eventId!: string;

  activeTab: 'jisajili' | 'changia' = 'jisajili';
  activeTabs: 'ControlNumber' | 'MixxbyYas' = 'ControlNumber';


  countries: any[] = [];
  phoneCountries: any[] = [];
  regions: any[] = [];

  selectedDial = '+255';

  years: number[] = [];

  amount = 0;
  formattedAmount = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    const currentYear = new Date().getFullYear();

    for (let y = currentYear; y >= 1900; y--) {
      this.years.push(y);
    }
  }

  formData: any = {
    name: '',
    phone: '',
    email: '',

    yearOfBirth: '',
    country: '',
    region: '',
    Gender: '',

    phoneCountry: 'TZ',
    fullPhone: '',

    tshirtSize: '',
    pickupLocation: '',
    raceType: '',
    Groupname: '',

    idType: '',
    numberOfID: '',
    proofOfPayment:'',
    agreed: false
  };

  ngOnInit(): void {

    // this.eventId = this.route.snapshot.paramMap.get('id')!;
  this.eventId = '1';

this.events$ = this.http.get(
  `https://events.tari.go.tz/api/admin/events/${this.eventId}`
);

    this.countries = Country.getAllCountries();
    this.phoneCountries = Country.getAllCountries();

    const tz = this.phoneCountries.find(
      c => c.isoCode === 'TZ'
    );

    if (tz) {
      this.selectedDial = `+${tz.phonecode}`;
    }
  }

  onCountryChange(countryCode: string): void {
    this.regions = State.getStatesOfCountry(countryCode);
  }

  onPhoneCountryChange(countryCode: string): void {

    const country = this.phoneCountries.find(
      c => c.isoCode === countryCode
    );

    this.selectedDial = country?.phonecode
      ? `+${country.phonecode}`
      : '+255';

    this.buildFullPhone();
  }

  buildFullPhone(): void {
    this.formData.fullPhone =
      `${this.selectedDial}${this.formData.phone}`;
  }

  onAmountInput(event: any): void {

    let value = event.target.value.replace(/,/g, '');

    if (isNaN(value)) {
      return;
    }

    this.amount = Number(value);

    this.formattedAmount = this.amount
      ? this.amount.toLocaleString()
      : '';
  }

  goToPayments(id: number): void {
  this.router.navigate(['/marathon', id]);
}

  goToDetails(event: any): void {
    this.router.navigate(['/details', event?.id || 1 ]);
  }

  isValidEmail(email: string): boolean {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }

  isValidPhone(phone: string): boolean {
    const phoneRegex =
      /^[0-9+\-\s]{9,15}$/;

    return phoneRegex.test(phone);
  }

 submitForm(): void {

  if (!this.formData.name) {
    alert('Name is required');
    return;
  }

  if (!this.isValidPhone(this.formData.phone)) {
    alert('Enter a valid phone number');
    return;
  }

  if (
    this.formData.email &&
    !this.isValidEmail(this.formData.email)
  ) {
    alert('Enter a valid email address');
    return;
  }

  if (!this.formData.agreed) {
    alert('You must accept the terms');
    return;
  }

  if (!this.formData.proofOfPayment) {
    alert('Upload proof of payment first');
    return;
  }

  const payload = {

    fullname: this.formData.name,

    phone:
      this.formData.fullPhone ||
      this.formData.phone,

    email: this.formData.email,

    yearOfBirth: this.formData.yearOfBirth,
    country: this.formData.country,
    region: this.formData.region,
    gender: this.formData.Gender,

    shirtSize: this.formData.tshirtSize,
    raceType: this.formData.raceType,
    pickupLocation: this.formData.pickupLocation,
    groupName: this.formData.Groupname,

    idType: this.formData.idType,
    idNumber: this.formData.numberOfID,

    proofOfPayment:
      this.formData.proofOfPayment,

    donationAmount:
      this.activeTab === 'changia'
        ? this.amount
        : null,

    registrationType:
      this.activeTab === 'changia'
        ? 'DONATION'
        : 'REGISTRATION',

    status: 'PENDING'
  };

  this.http.post(
    `https://events.tari.go.tz/api/admin/registrations?eventId=${this.eventId}`,
    payload
  ).subscribe({
    next: (res: any) => {

      console.log('Registration saved', res);
            alert('registration succesfully');


      this.router.navigate(['/marathon', res.id]);
    },

    error: (err) => {

      console.error(err);

      alert('Failed to submit registration');
    }
  });
}
onFileSelected(event: any): void {

  const file = event.target.files[0];

  if (!file) {
    return;
  }

  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'application/pdf'
  ];

  if (!allowedTypes.includes(file.type)) {
    alert('Please upload an image or PDF file only.');
    event.target.value = '';
    return;
  }

  const uploadData = new FormData();
  uploadData.append('file', file);

  this.http.post(
    'https://events.tari.go.tz/api/admin/registrations/upload',
    uploadData,
    { responseType: 'text' }
  ).subscribe({
    next: (url) => {

      console.log('Uploaded URL:', url);

      this.formData.proofOfPayment = url;

      alert('Proof of payment uploaded successfully,click Finish button');
    },

    error: (err) => {
      console.error(err);
      alert('Upload failed');
    }
  });
}
}

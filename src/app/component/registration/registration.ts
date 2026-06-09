import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { Country, State } from 'country-state-city';
@Component({
  selector: 'app-registration',
  imports: [CommonModule,FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
  standalone:true,
})
export class Registration implements OnInit  {

events$!: Observable<any[]>;
countries: any[] = [];
regions: any[] = [];
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
 countryList: string[] = [];

  
activeTab: 'jisajili' | 'kikundi' | 'changia' = 'jisajili';
eventId!: string;

ngOnInit() {
  this.eventId = this.route.snapshot.paramMap.get('id')!;

const api$ = this.http.get<any>(
  `https://41.59.225.78:8443/api/admin/events/${this.eventId}`
);
    this.events$ = api$;

  // this.http.get(`https://41.59.225.78:8443/api/admin/events/${this.eventId}`)
                  
  //   .subscribe(res => {
  //     this.event = res;
  //           console.log("Event loaded:", res);

  //   });

   this.countries = Country.getAllCountries();
     this.phoneCountries = Country.getAllCountries();

}

// when user selects country
onCountryChange(countryCode: string) {
  this.regions = State.getStatesOfCountry(countryCode);
}
goToPayments(event: any) {
this.router.navigate(['/payment', this.eventId]);}
goToDetails(event: any) {
  this.router.navigate(['/details', event.id]);
}

phoneCountries: any[] = [];
selectedDial = '+1';
onPhoneCountryChange(countryCode: string) {
  const country = this.phoneCountries.find(c => c.isoCode === countryCode);

  this.selectedDial = country?.phonecode
    ? `+${country.phonecode}`
    : '+1';

  this.buildFullPhone();
}

formData: any = {
  name: '',
  phone: '',
  email: '',
  age: '',
  yearOfBirth: '',
  group: '',
  location: '',
  amount: '',
  paymentMethod: '',
  raceType: '',
  tshirtSize: '',
  pickupLocation: '',
  country :'',
  region: '',
  Gender:'',
    phoneCountry: 'TZ',
  fullPhone: '',
   
  agreed: false
};
years: number[] = [];
buildFullPhone() {
  this.formData.fullPhone = `${this.selectedDial}${this.formData.phone}`;
}


amount: number = 0;
formattedAmount: string = '';

onAmountInput(event: any) {
  let value = event.target.value;

  // remove commas
  value = value.replace(/,/g, '');

  // allow only numbers
  if (isNaN(value)) return;

  this.amount = Number(value);

  // format with commas
  this.formattedAmount = this.amount
    ? this.amount.toLocaleString()
    : '';
}


isValidEmail(email: string): boolean {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9+\-\s]{9,15}$/;
  return phoneRegex.test(phone);
}

submitForm() {

  if (!this.formData.name) {
    alert("Name is required");
    return;
  }

  if (!this.isValidPhone(this.formData.phone)) {
    alert("Enter a valid phone number");
    return;
  }

  if (this.formData.email && !this.isValidEmail(this.formData.email)) {
    alert("Enter a valid email address");
    return;
  }

  if (!this.formData.agreed) {
    alert("You must accept the terms");
    return;
  }

 

   
    const payload = {
      fullname: this.formData.name,
      phone: this.formData.phone,
      email: this.formData.email,
      age: this.formData.age,
      shirtSize: this.formData.tshirtSize,
      raceType: this.formData.raceType,
      location: this.formData.pickupLocation,
      status: "PENDING"
    };

    this.http.post(
      `https://41.59.225.78:8443/api/admin/registrations?eventId=${this.eventId}`,
      payload
    ).subscribe({
      next: (res: any) => {
        this.router.navigate(['/payment', res.id]);
      },
      error: () => {
        alert("Failed to submit registration");
      }
    });
  }
}








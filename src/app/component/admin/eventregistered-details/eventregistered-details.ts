import { Component } from '@angular/core';
import { Sidebar } from '../../../layout/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eventregistered-details',
  imports: [Sidebar, CommonModule, FormsModule],
  templateUrl: './eventregistered-details.html',
  styleUrl: './eventregistered-details.css',
})
export class EventregisteredDetails {

  eventId = 1;

  events$: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.events$ = this.http.get<any[]>(
      `https://events.tari.go.tz/api/admin/registrations?eventId=${this.eventId}`
    );
  }
  downloadFile(url: string) {
  this.http.get(url, { responseType: 'blob' }).subscribe(blob => {
    const objectUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = objectUrl;
    a.download = url.split('/').pop() || 'file';

    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(objectUrl);
  });
}
}
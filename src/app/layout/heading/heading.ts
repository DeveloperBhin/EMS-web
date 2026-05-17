import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-heading',
  imports: [CommonModule],
  templateUrl: './heading.html',
  styleUrl: './heading.css',
  standalone: true,

})


export class Heading {
  menuOpen = false;


}

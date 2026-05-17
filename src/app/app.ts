import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { Heading } from './layout/heading/heading';
import { Footer } from './layout/footer/footer';
import { Home } from './component/home/home';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Heading,
    Footer,
    Home,
    
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:true,
})
export class App {
  // protected readonly title = signal('TARI_EMS-web');
}

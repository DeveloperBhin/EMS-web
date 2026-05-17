import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { Heading } from '../../layout/heading/heading';
import { Footer } from '../../layout/footer/footer';
import { Home } from '../../component/home/home';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    Heading,
    Footer,
    Home,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
  standalone:true,
})
export class MainLayout {}

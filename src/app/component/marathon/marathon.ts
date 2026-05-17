import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
};

@Component({
  selector: 'app-marathon',
  templateUrl: './marathon.html',
  styleUrl: './marathon.css',
  standalone: true,
  imports: [RouterModule, CommonModule,TranslateModule],
})
export class Marathon implements OnInit, AfterViewInit, OnDestroy {




  
  targetDate = new Date('2026-08-08T00:00:00');

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  countdownInterval: any;

  media: MediaItem[] = [
     { type: 'image', src: '/0V5A3525.jpg' },
    { type: 'image', src: '/0V5A3539.jpg' },
    { type: 'video', src: '/run.mp4' },
   
  ];

  currentIndex = 0;
  sliderInterval: any;

  selectedPayment: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) { const lang = localStorage.getItem('lang') || 'sw';

  this.currentLang = lang;
  this.translate.setFallbackLang('sw');
  this.translate.use(lang);}

  ngOnInit() {
    this.startCountdown();
    this.startSlider();
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
      this.cdr.detectChanges();
    }, 1000);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance <= 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    this.minutes = Math.floor((distance / (1000 * 60)) % 60);
    this.seconds = Math.floor((distance / 1000) % 60);
  }

  startSlider() {
    this.sliderInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.media.length;
    }, 7000);
  }

  get currentMedia(): MediaItem {
    return this.media[this.currentIndex];
  }

  ngAfterViewInit() {
    const video: HTMLVideoElement | null =
      document.querySelector('#bgvideo');

    if (video) {
      video.playbackRate = 0.5;
      video.play().catch(() => {});
    }
  }

  selectPayment(method: string) {
    this.selectedPayment = method;
  }

  goToRegister(event: any) {
    this.router.navigate(['/details', event.id]);
  }

  ngOnDestroy() {
    clearInterval(this.countdownInterval);
    clearInterval(this.sliderInterval);
  }


  menuOpen = false;

  currentLang = 'sw';



changeLang(lang: string) {
  this.currentLang = lang;
  this.translate.use(lang);
  localStorage.setItem('lang', lang);
}

}
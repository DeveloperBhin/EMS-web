import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  standalone:true,
})
export class Sidebar {

  menuOpen = false;

  currentLang = 'sw';

constructor(private translate: TranslateService) {
  const lang = localStorage.getItem('lang') || 'sw';

  this.currentLang = lang;
  this.translate.setFallbackLang('sw');
  this.translate.use(lang);
}

changeLang(lang: string) {
  this.currentLang = lang;
  this.translate.use(lang);
  localStorage.setItem('lang', lang);
}
}
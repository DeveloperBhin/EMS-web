import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-instructions',
  imports: [RouterModule, CommonModule,TranslateModule],
  templateUrl: './instructions.html',
  styleUrl: './instructions.css',
})
export class Instructions {

  constructor(
    private http: HttpClient,
    private router: Router,
    private translate: TranslateService
  )
  { 
    const lang = localStorage.getItem('lang') || 'sw';

  this.currentLang = lang;
  this.translate.setFallbackLang('sw');
  this.translate.use(lang);}

  menuOpen = false;

  currentLang = 'sw';



changeLang(lang: string) {
  this.currentLang = lang;
  this.translate.use(lang);
  localStorage.setItem('lang', lang);
}
}

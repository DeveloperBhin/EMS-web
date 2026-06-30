import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-heading',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './heading.html',
  styleUrl: './heading.css',
  standalone: true,

})


export class Heading {
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

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Marathonhead } from '../../layout/marathonhead/marathonhead';
import { Footer } from '../../layout/footer/footer';
import { WinnersDetails } from '../../component/winners-details/winners-details';
import { Instructions } from '../../component/instructions/instructions';
import { AboutMarathon } from '../../component/about-marathon/about-marathon';
@Component({
  selector: 'app-marathon-layout',
  imports: [
    RouterOutlet,
    Marathonhead,
    WinnersDetails,
    Instructions,
    AboutMarathon,

    Footer
  ],
  templateUrl: './marathon-layout.html',
  styleUrl: './marathon-layout.css',
  standalone:true,
})
export class MarathonLayout {}

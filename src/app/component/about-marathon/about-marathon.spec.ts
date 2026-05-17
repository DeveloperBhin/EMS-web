import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMarathon } from './about-marathon';

describe('AboutMarathon', () => {
  let component: AboutMarathon;
  let fixture: ComponentFixture<AboutMarathon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMarathon],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMarathon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

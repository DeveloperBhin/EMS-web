import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventregistered } from './eventregistered';

describe('Eventregistered', () => {
  let component: Eventregistered;
  let fixture: ComponentFixture<Eventregistered>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventregistered],
    }).compileComponents();

    fixture = TestBed.createComponent(Eventregistered);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

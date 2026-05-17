import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addevent } from './addevent';

describe('Addevent', () => {
  let component: Addevent;
  let fixture: ComponentFixture<Addevent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addevent],
    }).compileComponents();

    fixture = TestBed.createComponent(Addevent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

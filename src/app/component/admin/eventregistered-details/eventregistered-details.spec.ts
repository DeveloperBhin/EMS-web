import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventregisteredDetails } from './eventregistered-details';

describe('EventregisteredDetails', () => {
  let component: EventregisteredDetails;
  let fixture: ComponentFixture<EventregisteredDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventregisteredDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(EventregisteredDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

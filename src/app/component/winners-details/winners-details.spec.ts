import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersDetails } from './winners-details';

describe('WinnersDetails', () => {
  let component: WinnersDetails;
  let fixture: ComponentFixture<WinnersDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnersDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnersDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

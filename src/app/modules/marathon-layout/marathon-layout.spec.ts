import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathonLayout } from './marathon-layout';

describe('MarathonLayout', () => {
  let component: MarathonLayout;
  let fixture: ComponentFixture<MarathonLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarathonLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(MarathonLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marathonhead } from './marathonhead';

describe('Marathonhead', () => {
  let component: Marathonhead;
  let fixture: ComponentFixture<Marathonhead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marathonhead],
    }).compileComponents();

    fixture = TestBed.createComponent(Marathonhead);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

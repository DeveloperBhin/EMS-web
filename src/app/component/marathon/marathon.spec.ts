import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marathon } from './marathon';

describe('Marathon', () => {
  let component: Marathon;
  let fixture: ComponentFixture<Marathon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marathon],
    }).compileComponents();

    fixture = TestBed.createComponent(Marathon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

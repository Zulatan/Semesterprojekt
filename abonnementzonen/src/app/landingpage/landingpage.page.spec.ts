import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingpagePage } from './landingpage.page';

describe('LandingpagePage', () => {
  let component: LandingpagePage;
  let fixture: ComponentFixture<LandingpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LandingpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

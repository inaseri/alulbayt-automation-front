import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PepeolPassportComponent } from './pepeol-passport.component';

describe('PepeolPassportComponent', () => {
  let component: PepeolPassportComponent;
  let fixture: ComponentFixture<PepeolPassportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepeolPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepeolPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

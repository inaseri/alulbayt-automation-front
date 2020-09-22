import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PepeolPassportListComponent } from './pepeol-passport-list.component';

describe('PepeolPassportListComponent', () => {
  let component: PepeolPassportListComponent;
  let fixture: ComponentFixture<PepeolPassportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepeolPassportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepeolPassportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

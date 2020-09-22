import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PepeolPassportEditComponent } from './pepeol-passport-edit.component';

describe('PepeolPassportEditComponent', () => {
  let component: PepeolPassportEditComponent;
  let fixture: ComponentFixture<PepeolPassportEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepeolPassportEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepeolPassportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

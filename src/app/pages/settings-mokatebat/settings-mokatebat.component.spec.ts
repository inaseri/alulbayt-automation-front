import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMokatebatComponent } from './settings-mokatebat.component';

describe('SettingsMokatebatComponent', () => {
  let component: SettingsMokatebatComponent;
  let fixture: ComponentFixture<SettingsMokatebatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsMokatebatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMokatebatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

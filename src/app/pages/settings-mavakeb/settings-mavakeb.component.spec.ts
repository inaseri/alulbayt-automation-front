import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMavakebComponent } from './settings-mavakeb.component';

describe('SettingsMavakebComponent', () => {
  let component: SettingsMavakebComponent;
  let fixture: ComponentFixture<SettingsMavakebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsMavakebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMavakebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

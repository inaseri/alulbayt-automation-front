import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MokatebatReportComponent } from './mokatebat-report.component';

describe('MokatebatReportComponent', () => {
  let component: MokatebatReportComponent;
  let fixture: ComponentFixture<MokatebatReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MokatebatReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MokatebatReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

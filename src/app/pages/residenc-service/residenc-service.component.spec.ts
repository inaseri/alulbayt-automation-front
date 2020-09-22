import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencServiceComponent } from './residenc-service.component';

describe('ResidencServiceComponent', () => {
  let component: ResidencServiceComponent;
  let fixture: ComponentFixture<ResidencServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidencServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidencServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

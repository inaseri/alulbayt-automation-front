import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtabatComponent } from './atabat.component';

describe('AtabatComponent', () => {
  let component: AtabatComponent;
  let fixture: ComponentFixture<AtabatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtabatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtabatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

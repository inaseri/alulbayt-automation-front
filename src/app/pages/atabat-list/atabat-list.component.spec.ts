import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtabatListComponent } from './atabat-list.component';

describe('AtabatListComponent', () => {
  let component: AtabatListComponent;
  let fixture: ComponentFixture<AtabatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtabatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtabatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

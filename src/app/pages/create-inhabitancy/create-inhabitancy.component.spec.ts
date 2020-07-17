import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInhabitancyComponent } from './create-inhabitancy.component';

describe('CreateInhabitancyComponent', () => {
  let component: CreateInhabitancyComponent;
  let fixture: ComponentFixture<CreateInhabitancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInhabitancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInhabitancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

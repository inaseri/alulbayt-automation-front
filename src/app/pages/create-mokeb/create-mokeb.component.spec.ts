import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMokebComponent } from './create-mokeb.component';

describe('CreateMokebComponent', () => {
  let component: CreateMokebComponent;
  let fixture: ComponentFixture<CreateMokebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMokebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMokebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

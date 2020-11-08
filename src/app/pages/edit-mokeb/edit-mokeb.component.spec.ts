import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMokebComponent } from './edit-mokeb.component';

describe('EditMokebComponent', () => {
  let component: EditMokebComponent;
  let fixture: ComponentFixture<EditMokebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMokebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMokebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

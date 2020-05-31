import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMokebComponent } from './list-mokeb.component';

describe('ListMokebComponent', () => {
  let component: ListMokebComponent;
  let fixture: ComponentFixture<ListMokebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMokebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMokebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

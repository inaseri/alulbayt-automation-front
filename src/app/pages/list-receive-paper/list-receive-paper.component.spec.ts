import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReceivePaperComponent } from './list-receive-paper.component';

describe('ListReceivePaperComponent', () => {
  let component: ListReceivePaperComponent;
  let fixture: ComponentFixture<ListReceivePaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReceivePaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReceivePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

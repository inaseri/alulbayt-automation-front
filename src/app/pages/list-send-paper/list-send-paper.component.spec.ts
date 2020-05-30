import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSendPaperComponent } from './list-send-paper.component';

describe('ListSendPaperComponent', () => {
  let component: ListSendPaperComponent;
  let fixture: ComponentFixture<ListSendPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSendPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSendPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

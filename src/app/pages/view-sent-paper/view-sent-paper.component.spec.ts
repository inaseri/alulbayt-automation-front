import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSentPaperComponent } from './view-sent-paper.component';

describe('ViewSentPaperComponent', () => {
  let component: ViewSentPaperComponent;
  let fixture: ComponentFixture<ViewSentPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSentPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSentPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

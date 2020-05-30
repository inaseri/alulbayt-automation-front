import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSendPaperComponent } from './create-send-paper.component';

describe('CreateSendPaperComponent', () => {
  let component: CreateSendPaperComponent;
  let fixture: ComponentFixture<CreateSendPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSendPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSendPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

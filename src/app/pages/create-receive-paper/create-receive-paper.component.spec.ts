import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReceivePaperComponent } from './create-receive-paper.component';

describe('CreateReceivePaperComponent', () => {
  let component: CreateReceivePaperComponent;
  let fixture: ComponentFixture<CreateReceivePaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReceivePaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReceivePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

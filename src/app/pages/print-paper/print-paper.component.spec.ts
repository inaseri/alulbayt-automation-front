import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPaperComponent } from './print-paper.component';

describe('PrintPaperComponent', () => {
  let component: PrintPaperComponent;
  let fixture: ComponentFixture<PrintPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

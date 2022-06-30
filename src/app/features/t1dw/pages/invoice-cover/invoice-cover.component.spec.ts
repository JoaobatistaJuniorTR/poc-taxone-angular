import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceCoverComponent } from './invoice-cover.component';

describe('InvoiceCoverComponent', () => {
  let component: InvoiceCoverComponent;
  let fixture: ComponentFixture<InvoiceCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

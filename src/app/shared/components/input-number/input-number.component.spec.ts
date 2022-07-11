import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberComponent } from './input-number.component';

describe('NumberInputComponent', () => {
  let component: InputNumberComponent;
  let fixture: ComponentFixture<InputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputNumberComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerBarInfoComponent } from './manager-bar-info.component';

describe('ManagerBarInfoComponent', () => {
  let component: ManagerBarInfoComponent;
  let fixture: ComponentFixture<ManagerBarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerBarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerBarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

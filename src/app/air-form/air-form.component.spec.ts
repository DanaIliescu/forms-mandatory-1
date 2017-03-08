import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFormComponent } from './air-form.component';

describe('AirFormComponent', () => {
  let component: AirFormComponent;
  let fixture: ComponentFixture<AirFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

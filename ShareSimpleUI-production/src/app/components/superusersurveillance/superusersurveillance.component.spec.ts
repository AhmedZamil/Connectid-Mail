import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserSurveillanceComponent } from './superusersurveillance.component';

describe('SuperuserSurveillanceComponent', () => {
  let component: SuperuserSurveillanceComponent;
  let fixture: ComponentFixture<SuperuserSurveillanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperuserSurveillanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperuserSurveillanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

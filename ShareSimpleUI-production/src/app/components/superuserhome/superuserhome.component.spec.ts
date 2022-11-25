import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserhomeComponent } from './superuserhome.component';

describe('SuperuserhomeComponent', () => {
  let component: SuperuserhomeComponent;
  let fixture: ComponentFixture<SuperuserhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperuserhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperuserhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

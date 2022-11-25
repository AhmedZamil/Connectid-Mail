import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissiongrantedComponent } from './permissiongranted.component';

describe('PermissiongrantedComponent', () => {
  let component: PermissiongrantedComponent;
  let fixture: ComponentFixture<PermissiongrantedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissiongrantedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissiongrantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

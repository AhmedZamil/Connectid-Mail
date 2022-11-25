import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfolderComponent } from './userfolder.component';

describe('UserfolderComponent', () => {
  let component: UserfolderComponent;
  let fixture: ComponentFixture<UserfolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

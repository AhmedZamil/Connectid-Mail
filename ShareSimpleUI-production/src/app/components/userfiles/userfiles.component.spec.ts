import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfilesComponent } from './userfiles.component';

describe('UserfilesComponent', () => {
  let component: UserfilesComponent;
  let fixture: ComponentFixture<UserfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

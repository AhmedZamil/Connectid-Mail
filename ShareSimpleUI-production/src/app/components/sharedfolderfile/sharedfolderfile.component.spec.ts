import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedfolderfileComponent } from './sharedfolderfile.component';

describe('SharedfolderfileComponent', () => {
  let component: SharedfolderfileComponent;
  let fixture: ComponentFixture<SharedfolderfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedfolderfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedfolderfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

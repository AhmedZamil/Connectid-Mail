import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesharingComponent } from './managesharing.component';

describe('ManagesharingComponent', () => {
  let component: ManagesharingComponent;
  let fixture: ComponentFixture<ManagesharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

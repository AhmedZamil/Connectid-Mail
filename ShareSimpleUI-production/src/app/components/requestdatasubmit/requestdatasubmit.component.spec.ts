import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdatasubmitComponent } from './requestdatasubmit.component';

describe('RequestdatasubmitComponent', () => {
  let component: RequestdatasubmitComponent;
  let fixture: ComponentFixture<RequestdatasubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestdatasubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdatasubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdataComponent } from './requestdata.component';

describe('RequestdataComponent', () => {
  let component: RequestdataComponent;
  let fixture: ComponentFixture<RequestdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

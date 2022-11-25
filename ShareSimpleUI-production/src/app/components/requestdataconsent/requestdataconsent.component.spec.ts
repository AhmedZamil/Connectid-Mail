import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdataconsentComponent } from './requestdataconsent.component';

describe('RequestdataconsentComponent', () => {
  let component: RequestdataconsentComponent;
  let fixture: ComponentFixture<RequestdataconsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestdataconsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdataconsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

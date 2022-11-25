import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpostdataComponent } from './showpostdata.component';

describe('ShowpostdataComponent', () => {
  let component: ShowpostdataComponent;
  let fixture: ComponentFixture<ShowpostdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpostdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpostdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

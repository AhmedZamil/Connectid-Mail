import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadpermissionfileComponent } from './downloadpermissionfile.component';

describe('DownloadpermissionfileComponent', () => {
  let component: DownloadpermissionfileComponent;
  let fixture: ComponentFixture<DownloadpermissionfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadpermissionfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadpermissionfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

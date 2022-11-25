import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharefilesComponent } from './sharefiles.component';

describe('SharefilesComponent', () => {
  let component: SharefilesComponent;
  let fixture: ComponentFixture<SharefilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharefilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharefilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootfolderComponent } from './rootfolder.component';

describe('RootfolderComponent', () => {
  let component: RootfolderComponent;
  let fixture: ComponentFixture<RootfolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootfolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

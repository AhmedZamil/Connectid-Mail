import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageinactiveuserComponent } from './messageinactiveuser.component';

describe('MessageinactiveuserComponent', () => {
  let component: MessageinactiveuserComponent;
  let fixture: ComponentFixture<MessageinactiveuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageinactiveuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageinactiveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

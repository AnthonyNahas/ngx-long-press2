import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLongPress2Component } from './ngx-long-press2.component';

describe('NgxLongPress2Component', () => {
  let component: NgxLongPress2Component;
  let fixture: ComponentFixture<NgxLongPress2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLongPress2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLongPress2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

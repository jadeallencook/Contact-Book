import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsIncludesComponent } from './js-includes.component';

describe('JsIncludesComponent', () => {
  let component: JsIncludesComponent;
  let fixture: ComponentFixture<JsIncludesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsIncludesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsIncludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

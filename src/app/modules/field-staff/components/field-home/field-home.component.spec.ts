import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldHomeComponent } from './field-home.component';

describe('FieldHomeComponent', () => {
  let component: FieldHomeComponent;
  let fixture: ComponentFixture<FieldHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

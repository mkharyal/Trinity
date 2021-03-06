import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldLayoutComponent } from './field-layout.component';

describe('FieldLayoutComponent', () => {
  let component: FieldLayoutComponent;
  let fixture: ComponentFixture<FieldLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

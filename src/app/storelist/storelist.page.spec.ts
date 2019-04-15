import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorelistPage } from './storelist.page';

describe('StorelistPage', () => {
  let component: StorelistPage;
  let fixture: ComponentFixture<StorelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

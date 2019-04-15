import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipelistPage } from './recipelist.page';

describe('RecipelistPage', () => {
  let component: RecipelistPage;
  let fixture: ComponentFixture<RecipelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

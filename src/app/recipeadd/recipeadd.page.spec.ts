import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeaddPage } from './recipeadd.page';

describe('RecipeaddPage', () => {
  let component: RecipeaddPage;
  let fixture: ComponentFixture<RecipeaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

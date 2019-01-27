import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueProductsCategoriesComponent } from './catalogue-products-categories.component';

describe('CatalogueProductsCategoriesComponent', () => {
  let component: CatalogueProductsCategoriesComponent;
  let fixture: ComponentFixture<CatalogueProductsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueProductsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueProductsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

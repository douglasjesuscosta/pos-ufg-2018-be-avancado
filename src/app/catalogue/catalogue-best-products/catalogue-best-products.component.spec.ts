import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueBestProductsComponent } from './catalogue-best-products.component';

describe('CatalogueBestProductsComponent', () => {
  let component: CatalogueBestProductsComponent;
  let fixture: ComponentFixture<CatalogueBestProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueBestProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueBestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

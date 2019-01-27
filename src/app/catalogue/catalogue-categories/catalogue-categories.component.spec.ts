import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueCategoriesComponent } from './catalogue-categories.component';

describe('CatalogueCategoriesComponent', () => {
  let component: CatalogueCategoriesComponent;
  let fixture: ComponentFixture<CatalogueCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMechanicalWatchesComponent } from './product-mechanical-watches.component';

describe('ProductMechanicalWatchesComponent', () => {
  let component: ProductMechanicalWatchesComponent;
  let fixture: ComponentFixture<ProductMechanicalWatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMechanicalWatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMechanicalWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

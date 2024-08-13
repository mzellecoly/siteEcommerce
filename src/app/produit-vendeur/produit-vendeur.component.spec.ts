import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitVendeurComponent } from './produit-vendeur.component';

describe('ProduitVendeurComponent', () => {
  let component: ProduitVendeurComponent;
  let fixture: ComponentFixture<ProduitVendeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitVendeurComponent]
    });
    fixture = TestBed.createComponent(ProduitVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

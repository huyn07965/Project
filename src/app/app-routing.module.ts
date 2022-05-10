import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductMechanicalWatchesComponent } from './product-mechanical-watches/product-mechanical-watches.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'Product', component:ProductComponent},
  { path: 'Home', component:HomeComponent},
  { path: 'Cart', component:CartComponent},
  { path: 'Product Mechanical', component:ProductMechanicalWatchesComponent},
  { path: 'Contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

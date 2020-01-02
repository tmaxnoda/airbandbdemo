import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewOfferPage } from './new-offer.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: NewOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewOfferPageRoutingModule {}

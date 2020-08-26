import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PlacesPage } from "./places.page";

const routes: Routes = [
  {
    path: "",
    component: PlacesPage,
  },
  {
    path: "discover",
    loadChildren: () =>
      import("./discover/discover.module").then((m) => m.DiscoverPageModule),
  },
  {
    path: "offers",
    loadChildren: () =>
      import("./offers/offers.module").then((m) => m.OffersPageModule),
  },

  {
    path: "new-offer",
    loadChildren: () =>
      import("./offers/new-offer/new-offer.module").then(
        (m) => m.NewOfferPageModule
      ),
  },
  {
    path: "edit-offer",
    loadChildren: () =>
      import("./offers/edit-offer/edit-offer.module").then(
        (m) => m.EditOfferPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}

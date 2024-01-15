import { Routes } from '@angular/router';

import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { ListingDataFormComponent } from './listing-data-form/listing-data-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/listings',
    pathMatch: 'full',
  },
  {
    path: 'listings',
    component: ListingsPageComponent,
    title: 'Listings',
    pathMatch: 'full',
  },
  {
    path: 'listings/:id',
    component: ListingDetailPageComponent,
    title: 'Listing Detail',
  },
  {
    path: 'contact/:id',
    component: ContactPageComponent,
    title: 'Contact',
  },
  {
    path: 'edit-listing/:id',
    component: EditListingPageComponent,
    title: 'Edit Listing',
  },
  {
    path: 'my-listings',
    component: MyListingsPageComponent,
    title: 'My Listings',
  },
  {
    path: 'new-listing',
    component: NewListingPageComponent,
    title: 'New Listing',
  },
];

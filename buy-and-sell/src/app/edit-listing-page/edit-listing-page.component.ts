import { Component, Input } from '@angular/core';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { fakeListings, fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-edit-listing-page',
  standalone: true,
  imports: [ListingDataFormComponent, RouterModule],
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css',
})
export class EditListingPageComponent {
  listing: Listing;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeMyListings.find((listing) => listing.id === id);
  }

  onSubmit(): void {
    alert('Saving changes to the listing...');
    this.router.navigateByUrl('/my-listings');
  }
}

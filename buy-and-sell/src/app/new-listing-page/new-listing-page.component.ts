import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';

@Component({
  selector: 'app-new-listing-page',
  standalone: true,
  imports: [RouterModule, FormsModule, ListingDataFormComponent],
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css',
})
export class NewListingPageComponent {
  constructor(private router: Router) {}

  onSubmit(): void {
    alert('Creating a new listing...');
    this.router.navigateByUrl('/my-listings');
  }
}

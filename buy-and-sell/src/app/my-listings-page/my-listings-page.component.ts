import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListingsService } from '../listings.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-listings-page',
  standalone: true,
  imports: [NgFor, RouterModule, HttpClientModule],
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css',
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listingsService.getListingsForUser().subscribe((listings) => listings);
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListing(listingId).subscribe(() => {
      this.listings = this.listings.filter(
        (listing) => listing.id !== listingId
      );
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListingsService } from '../listings.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [NgFor, RouterModule, HttpClientModule],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css',
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listingsService
      .getListings()
      .subscribe((listings) => (this.listings = listings));
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.css',
})
export class ListingDataFormComponent {
  @Input() buttonText;
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice;

  name: string = '';
  description: string = '';
  price: number;
  views: number;

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: null,
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: Number(this.views),
    });
  }
}

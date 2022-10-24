import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateBackService {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}

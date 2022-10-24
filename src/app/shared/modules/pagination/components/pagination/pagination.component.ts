import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input('total') totalProps: number;
  @Input('url') urlProps: string;
  @Input('currentPage') currentPageProps: number;

  constructor(private router: Router) {}
  pageEvent: PageEvent;

  OnPageChange(event: PageEvent) {
    const page = event.pageIndex + 1 > 1 ? event.pageIndex + 1 : null;
    this.router.navigate([this.urlProps], {
      queryParams: { page: page },
    });
  }
}

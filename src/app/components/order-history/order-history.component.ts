import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OrderService, Order } from '../../services/order.service';
import { OrderFilterComponent } from "../order-filter/order-filter.component";
import { OrderTableComponent } from "../order-table/order-table.component";
import { FiltersService } from '../../services/filters.service';
import { NgIf } from '@angular/common';
import { NothingToDisplayComponent } from "../nothing-to-display/nothing-to-display.component";

@Component({
    selector: 'app-order-history',
    standalone: true,
    templateUrl: './order-history.component.html',
    styleUrl: './order-history.component.less',
    imports: [
        MatToolbarModule,
        OrderFilterComponent,
        OrderTableComponent,
        NgIf,
        NothingToDisplayComponent
    ]
})
export class OrderHistoryComponent implements OnInit {

  dataSource = new MatTableDataSource<Order>([]);

  constructor(
    private orderService: OrderService,
    private filtersService: FiltersService,
    ) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.filterPredicate = this.filtersService.createFilter();
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = JSON.stringify(filterValue);
  }
}
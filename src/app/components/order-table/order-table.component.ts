import { Component, Input } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Order } from '../../services/order.service';

@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './order-table.component.html',
  styleUrl: './order-table.component.less'
})
export class OrderTableComponent {
  @Input() dataSource = new MatTableDataSource<Order>([]);
  displayedColumns: string[] = ['status', 'orderNumber', 'productLine', 'product', 'quantity', 'dateRequested'];

  constructor() { }

  ngOnInit(): void { }

}
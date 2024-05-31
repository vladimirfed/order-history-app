import { Component, Output, EventEmitter } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-order-filter',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    FormsModule,
    MatTooltip
  ],
  templateUrl: './order-filter.component.html',
  styleUrl: './order-filter.component.less'
})
export class OrderFilterComponent {
  selectedStatuses: string[] = [];
  selectedProductLine: string = '';
  dateFrom: Date | null = null;
  dateTo: Date | null = null;
  searchTerm: string = '';

  @Output() filterChange = new EventEmitter<any>();

  applyFilter() {
    const filterValue = {
      statuses: this.selectedStatuses,
      productLine: this.selectedProductLine,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      searchTerm: this.searchTerm.trim().toLowerCase()
    };
    this.filterChange.emit(filterValue);
  }
}

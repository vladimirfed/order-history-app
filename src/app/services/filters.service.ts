import { Injectable } from '@angular/core';
import { Order } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor() { }

  public createFilter(): (data: Order, filter: string) => boolean {
    const filterFunction = (data: Order, filter: string): boolean => {
      const searchTerms = JSON.parse(filter);
      const dateRequested = new Date(data.dateRequested.split('.').reverse().join('-'));

      return this.checkStatus(data.status, searchTerms.statuses) &&
             this.checkProductLine(data.productLine, searchTerms.productLine) &&
             this.checkDate(dateRequested, searchTerms.dateFrom, searchTerms.dateTo) &&
             this.checkSearchTerm(data, searchTerms.searchTerm);
    };
    return filterFunction;
  }

  private checkStatus(status: string, selectedStatuses: string[]): boolean {
    return selectedStatuses.length ? selectedStatuses.includes(status) : true;
  }
  
  private checkProductLine(productLine: string, selectedProductLine: string): boolean {
    return selectedProductLine ? productLine === selectedProductLine : true;
  }
  
  private checkDate(dateRequested: Date, dateFrom: Date | null, dateTo: Date | null): boolean {
    return (!dateFrom || dateRequested >= dateFrom) && (!dateTo || dateRequested <= dateTo);
  }
  
  private checkSearchTerm(order: Order, searchTerm: string): boolean {
    const lowerCaseSearchTerm = searchTerm.trim().toLowerCase();
    return order.orderNumber.toString().toLowerCase().includes(lowerCaseSearchTerm) || 
           order.product.toLowerCase().includes(lowerCaseSearchTerm) ||
           order.quantity.toLowerCase().includes(lowerCaseSearchTerm) ||
           order.dateRequested.toLowerCase().includes(lowerCaseSearchTerm);
  }
}


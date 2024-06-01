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
             this.checkDate(dateRequested, new Date(searchTerms.dateFrom), new Date(searchTerms.dateTo)) &&
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
    const getDateWithoutTime = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const requestedDate = getDateWithoutTime(dateRequested);
    const fromDate = dateFrom && getDateWithoutTime(dateFrom);
    const toDate = dateTo && getDateWithoutTime(dateTo);

    return (!fromDate || requestedDate! >= fromDate) && (!toDate || requestedDate! <= toDate);
}
  
  private checkSearchTerm(order: Order, searchTerm: string): boolean {
    const lowerCaseSearchTerm = searchTerm.trim().toLowerCase();
    return order.orderNumber.toString().toLowerCase().includes(lowerCaseSearchTerm) || 
           order.product.toLowerCase().includes(lowerCaseSearchTerm) ||
           order.quantity.toLowerCase().includes(lowerCaseSearchTerm) ||
           order.dateRequested.toLowerCase().includes(lowerCaseSearchTerm);
  }
}


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Order {
  status: string;
  orderNumber: number;
  productLine: string;
  product: string;
  quantity: string;
  dateRequested: string;
}


// mock data
const ORDER_DATA: Order[] = [
  {status: 'In Progress', orderNumber: 3301, productLine: 'Ready-Mix', product: '1-200-2-C-28-12-1-3-000', quantity: '12 m3', dateRequested: '20.10.2022'},
  {status: 'Pending', orderNumber: 3305, productLine: 'Cement', product: 'Gris CPC 30 R Monterrey Extra 50Kg.', quantity: '10 TN', dateRequested: '10.10.2022'},
  {status: 'Pending', orderNumber: 3290, productLine: 'Aggregates', product: 'Arena Triturada Caliza Malla 4', quantity: '2 TN', dateRequested: '29.09.2022'},
  {status: 'Completed', orderNumber: 3184, productLine: 'Aggregates', product: 'Arena Triturada Caliza Malla 4', quantity: '5 TN', dateRequested: '14.05.2022'},
  {status: 'Completed', orderNumber: 3295, productLine: 'Cement', product: 'Gris CPC30R Tolteca Extra 50Kg', quantity: '12 TN', dateRequested: '05.04.2022'},
  {status: 'Completed', orderNumber: 2994, productLine: 'Ready-Mix', product: '1-200-2-C-28-14-1-3-000', quantity: '15.5 m3', dateRequested: '10.03.2022'},
];

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrders(): Observable<Order[]> {
    return of(ORDER_DATA);
  }
}

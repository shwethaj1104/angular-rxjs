import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Observable } from 'rxjs';
import { addProduct } from './store/table.actions';
import { selectCountProducts } from './store/table.selector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rowData: any;
  columnDefs: any;
  defaultColDef: any

  countProducts$: Observable<any>;

  constructor(private store: Store<any>) {
    this.countProducts$ = store.select(selectCountProducts);
  }

  ngOnInit(): void {
    this.store.dispatch(addProduct({
      orderId: "1",
      custonerPO: "customer",
      account: "account",
      orderDate: "01-28-2022",
      orderedBy: "Rushi",
      orderTotal: "$ 567.98"
    }))
    this.countProducts$.subscribe(val => this.rowData = val)

    this.columnDefs = [{ headerName: "ORDER #", field: "orderId" },
    { headerName: "CUSTOMER P.O.#", field: "custonerPO" },
    { headerName: "ACCOUNT#", field: "account" },
    { headerName: "ORDER DATE", field: "orderDate" },
    { headerName: "ORDERED BY", field: "orderedBy" },
    { headerName: "ORDER TOTAL", field: "orderTotal" }];
  }

}

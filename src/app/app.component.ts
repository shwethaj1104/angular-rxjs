import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColDef, RowClassRules } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { bufferTime, combineLatest, concat, concatMap, debounce, debounceTime, exhaustMap, filter, forkJoin, from, fromEvent, interval, map, merge, Observable, observable, of, race, Subject, switchMap, take, tap, throwError, zip } from 'rxjs';
import { getData } from './data';
// import { AddItemAction } from './store/actions/course.action';
import { addProduct } from './store/cart.actions';
import { selectCountProducts } from './store/cart.selector';
// import { CourseItem } from './store/models/courseItem.model';
// import { State } from './store/models/state.model';

type Durum = []

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rowData: any;
  columnDefs: any;
  defaultColDef:any

  // courseItems$: Observable<Array<CourseItem>> | undefined;
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
      this.countProducts$.subscribe(val=>this.rowData=val)
      
    this.columnDefs = [{ field: "orderId" }, { field: "custonerPO" }, { field: "account" },
    { field: "orderDate" }, { field: "orderedBy" }, { field: "orderTotal" }];


  }

}

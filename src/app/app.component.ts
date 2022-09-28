import { Component, OnDestroy, OnInit } from '@angular/core';
import { ColDef, RowClassRules } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { bufferTime, combineLatest, concat, concatMap, debounce, debounceTime, exhaustMap, filter, forkJoin, from, fromEvent, interval, map, merge, Observable, observable, of, race, Subject, switchMap, take, tap, throwError, zip } from 'rxjs';
import { getData } from './data';

type Durum = []

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  obs: any;
  rowData: any;
  columnDefs: any;
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
  };

  constructor() { }

  ngOnInit(): void {
    console.log("my ref data", getData)
    this.columnDefs = [{ field: "orderId" }, { field: "custonerPO" }, { field: "account" },
    { field: "orderDate" }, { field: "orderedBy" }, { field: "orderTotal" }];

    this.rowData = getData;

  }
  sortByDate() {
    let sortByvalue = document.getElementById("sortByDate");
    console.log("inside sort", sortByvalue?.innerText)
  }




}

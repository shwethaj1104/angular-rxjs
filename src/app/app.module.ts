import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
// import { courseReducer } from './store/reducers/course.reducer';
import { cartReducer } from './store/table.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    StoreModule.forRoot({ cartEntries: cartReducer }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

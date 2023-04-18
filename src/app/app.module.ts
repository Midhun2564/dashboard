import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainComponent } from './components/main/main.component';
import { TopWidgetComponent } from './components/top-widget/top-widget.component';
import { SalesByMonthComponent } from './components/sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './components/sales-by-category/sales-by-category.component';
import { LastFewTransactionComponent } from './components/last-few-transaction/last-few-transaction.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { ChartModule } from 'angular-highcharts';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    LastFewTransactionComponent,
    TopProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BuyTradeComponent } from './buy-trade/buy-trade.component';
import { SellTradeComponent } from './sell-trade/sell-trade.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StockTableComponent } from './portfolio/stock-table/stock-table.component';
import { MfTableComponent } from './portfolio/mf-table/mf-table.component';
import { BondTableComponent } from './portfolio/bond-table/bond-table.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterFormComponent } from './register-page/register-form/register-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { MarketBondTableComponent } from './market-place/market-bond-table/market-bond-table.component';
import { MarketMfTableComponent } from './market-place/market-mf-table/market-mf-table.component';
import { MarketStockTableComponent } from './market-place/market-stock-table/market-stock-table.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    HomePageComponent,
    TradeHistoryComponent,
    PortfolioComponent,
    BuyTradeComponent,
    SellTradeComponent,
    PageNotFoundComponent,
    StockTableComponent,
    MfTableComponent,
    BondTableComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    MarketPlaceComponent,
    MarketBondTableComponent,
    MarketMfTableComponent,
    MarketStockTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatTooltipModule,
    MatSortModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  exports: [LoginPageComponent, HomePageComponent],
})
export class FeaturesModule {}

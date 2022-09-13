import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from "@angular/material/card";
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BuyTradeComponent } from './buy-trade/buy-trade.component';
import { SellTradeComponent } from './sell-trade/sell-trade.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [LoginPageComponent, HomePageComponent],
})
export class FeaturesModule {}

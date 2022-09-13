import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BuyTradeComponent } from './buy-trade/buy-trade.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SellTradeComponent } from './sell-trade/sell-trade.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatCardModule,
    
    MatButtonModule,
    
  ],
  exports: [LoginPageComponent, HomePageComponent],
})
export class FeaturesModule {}

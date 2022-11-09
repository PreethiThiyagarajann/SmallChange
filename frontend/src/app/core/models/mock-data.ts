// import { BondHolding } from './bond-holding';
// import { MfHolding } from './mf-holding';
// import { StockHolding } from './stock-holding';
// import { TradeStock } from './trade-stock';
// import { StockList } from './stock-list';
// import { BondList } from './bond-list';
// import { User } from './user';
// import { MfList } from './mf-list';

// export var market_stocks: StockList[] = [
//   {
//     name: 'Apple Inc',
//     code: 'AAPL',
//     buy_price: 155.34,
//     LTP: 170,
//     asset_class: 'main_index_stocks',
//   },
//   {
//     name: 'Tesla Inc',
//     code: 'TSLA',
//     buy_price: 657.65,
//     LTP: 650,
//     asset_class: 'main_index_stocks',
//   },
//   {
//     name: 'Amazon.com Inc',
//     code: 'AMZN',
//     buy_price: 2354.35,
//     LTP: 2360,
//     asset_class: 'main_index_stocks',
//   },
//   {
//     name: 'Alphabet Inc',
//     code: 'GOOG',
//     buy_price: 2895.5,
//     LTP: 2900,
//     asset_class: 'main_index_stocks',
//   },
//   {
//     name: 'Facebook Inc',
//     code: 'FB',
//     buy_price: 376.26,
//     LTP: 350,
//     asset_class: 'main_index_stocks',
//   },
//   {
//     name: 'Vinco Ventures',
//     code: 'BBIG',
//     buy_price: 5.56,
//     LTP: 7.4,
//     asset_class: 'small_cap_company_stocks',
//   },
//   {
//     name: 'Microsoft Corp',
//     code: 'MSFT',
//     buy_price: 350.76,
//     LTP: 350,
//     asset_class: 'small_cap_company_stocks',
//   },
//   {
//     name: 'Sphere 3D Corp',
//     code: 'ANY',
//     buy_price: 6.42,
//     LTP: 8.3,
//     asset_class: 'small_cap_company_stocks',
//   },
//   {
//     name: 'Bank of America Corp',
//     code: 'BAC',
//     buy_price: 41.05,
//     LTP: 45.3,
//     asset_class: 'small_cap_company_stocks',
//   },
//   {
//     name: 'Comcast Corp',
//     code: 'CMCSA',
//     buy_price: 61.72,
//     LTP: 61,
//     asset_class: 'small_cap_company_stocks',
//   },
//   {
//     name: 'Lucid Group Inc Shs',
//     code: 'LCID',
//     buy_price: 22.33,
//     LTP: 24,
//     asset_class: 'international_market_stocks',
//   },
//   {
//     name: 'Pfizer Inc',
//     code: 'PFE',
//     buy_price: 46.84,
//     LTP: 42.34,
//     asset_class: 'international_market_stocks',
//   },
//   {
//     name: 'Mastercard Inc',
//     code: 'MA',
//     buy_price: 181,
//     LTP: 183.34,
//     asset_class: 'international_market_stocks',
//   },
//   {
//     name: 'NVDIA Corp',
//     code: 'NVDA',
//     buy_price: 228.43,
//     LTP: 231.43,
//     asset_class: 'international_market_stocks',
//   },
//   {
//     name: 'Aliaba Group Holding Ltd ADR',
//     code: 'BABA',
//     buy_price: 175.5,
//     LTP: 174.3,
//     asset_class: 'international_market_stocks',
//   },
// ];

// export var market_mfs: MfList[] = [
//   {
//     name: 'Vanguard 500',
//     code: 'VFIAX',
//     interest: 483,
//     asset_class: 'mutual_fund',
//   },
//   {
//     name: 'Finance 500 Index fund',
//     code: 'FXAIX',
//     interest: 1000,
//     asset_class: 'mutual_fund',
//   },
//   {
//     name: 'SPDR S&P 500 ETF',
//     code: 'SPY',
//     interest: 94,
//     asset_class: 'mutual_fund',
//   },
//   {
//     name: 'Finance Govt Cash Rsrvs',
//     code: 'FDRXX',
//     interest: 493,
//     asset_class: 'mutual_fund',
//   },
//   {
//     name: 'American Funds gro',
//     code: 'AGTHX',
//     interest: 50,
//     asset_class: 'mutual_fund',
//   },
// ];

// export var market_bonds: BondList[] = [
//   {
//     name: 'Schwab Corp',
//     code: 'SCHI',
//     interest: 1.18,
//     asset_class: 'corporate_bonds',
//   },
//   {
//     name: 'Invesco',
//     code: 'INV',
//     interest: 1.02,
//     asset_class: 'corporate_bonds',
//   },
//   {
//     name: 'Vanguard',
//     code: 'VNG',
//     interest: 1.19,
//     asset_class: 'corporate_bonds',
//   },
//   {
//     name: 'iShares',
//     code: 'IGSB',
//     interest: 0.39,
//     asset_class: 'corporate_bonds',
//   },
//   {
//     name: 'BlackRock',
//     code: 'BLRC',
//     interest: 0.23,
//     asset_class: 'corporate_bonds',
//   },
//   {
//     name: 'SPDR Bloomberg Barclays',
//     code: 'BIL',
//     interest: 1.58,
//     asset_class: 'government_bonds',
//   },
//   {
//     name: 'iShares US Treasury',
//     code: 'GOVT',
//     interest: 0.56,
//     asset_class: 'government_bonds',
//   },
//   {
//     name: 'PIMCO',
//     code: 'MINT',
//     interest: 1.12,
//     asset_class: 'government_bonds',
//   },
//   {
//     name: 'ProShares',
//     code: 'TBX',
//     interest: 0.28,
//     asset_class: 'government_bonds',
//   },
//   {
//     name: 'FlexShares',
//     code: 'TDTT',
//     interest: 1.43,
//     asset_class: 'government_bonds',
//   },
// ];

// export var dummy_data_stocks: StockHolding[] = [
//   {
//     name: 'Apple Inc',
//     code: 'AAPL',
//     quantity: 100,
//     buy_price: 155.34,
//     LTP: 154.29,
//     asset_class: 'main_index_stocks',
//   },
//   {
//     name: 'Tesla Inc',
//     code: 'TSLA',
//     quantity: 20,
//     buy_price: 657.65,
//     LTP: 733.8,
//     asset_class: 'main_index_stocks',
//   },
//   {
//     name: 'Amazon.com Inc',
//     code: 'AMZN',
//     quantity: 12,
//     buy_price: 2354.34,
//     LTP: 3471.2,
//     asset_class: 'main_index_stocks',
//   },
//   {
//     name: 'Vinco Ventures',
//     code: 'BBIG',
//     quantity: 550,
//     buy_price: 5.56,
//     LTP: 7.65,
//     asset_class: 'small_cap_company_stocks',
//   },
//   {
//     name: 'Microsoft Corp',
//     code: 'MSFT',
//     quantity: 34,
//     buy_price: 350.76,
//     LTP: 300.88,
//     asset_class: 'small_cap_company_stocks',
//   },
//   {
//     name: 'Sphere 3D Corp',
//     code: 'ANY',
//     quantity: 85,
//     buy_price: 6.42,
//     LTP: 6.39,
//     asset_class: 'small_cap_company_stocks',
//   },
//   {
//     name: 'Lucid Group Inc Shs',
//     code: 'LCID',
//     quantity: 188,
//     buy_price: 22.33,
//     LTP: 19.42,
//     asset_class: 'international_market_stocks',
//   },
//   {
//     name: 'Aliaba Group Holding Ltd ADR',
//     code: 'BABA',
//     quantity: 30,
//     buy_price: 175.5,
//     LTP: 170.71,
//     asset_class: 'international_market_stocks',
//   },
//   {
//     name: 'Facebook Inc',
//     code: 'FB',
//     quantity: 43,
//     buy_price: 389.56,
//     LTP: 376.71,
//     asset_class: 'main_index_stocks',
//   },
//   {
//     name: 'Walmart Inc',
//     code: 'WMT',
//     quantity: 20,
//     buy_price: 151.34,
//     LTP: 145.65,
//     asset_class: 'main_index_stocks',
//   },
//   {
//     name: 'Mastercard Incorporated',
//     code: 'MA',
//     quantity: 45,
//     buy_price: 302.34,
//     LTP: 347.2,
//     asset_class: 'main_index_stocks',
//   },
//   {
//     name: 'Aterian',
//     code: 'ATER',
//     quantity: 1000,
//     buy_price: 5.56,
//     LTP: 17.89,
//     asset_class: 'small_cap_company_stocks',
//   },
//   {
//     name: 'BHL Group Limited',
//     code: 'BHP',
//     quantity: 324,
//     buy_price: 67.8,
//     LTP: 61.09,
//     asset_class: 'small_cap_company_stocks',
//   },
// ];

// export var dummy_data_mfs: MfHolding[] = [
//   {
//     name: 'Vanguard 500',
//     code: 'VFIAX',
//     quantity: 100,
//     buy_price: 400.34,
//     LTP: 419.68,
//     asset_class: 'mutual_fund',
//   },
//   {
//     name: 'Finance 500 Index fund',
//     code: 'FXAIX',
//     quantity: 20,
//     buy_price: 160.45,
//     LTP: 157.76,
//     asset_class: 'mutual_fund',
//   },
//   {
//     name: 'SPDR S&P 500 ETF',
//     code: 'SPY',
//     quantity: 12,
//     buy_price: 439.45,
//     LTP: 452.77,
//     asset_class: 'mutual_fund',
//   },
//   {
//     name: 'Finance Govt Cash Rsrvs',
//     code: 'FDRXX',
//     quantity: 550,
//     buy_price: 1.0,
//     LTP: 1.0,
//     asset_class: 'mutual_fund',
//   },
//   {
//     name: 'American Funds gro',
//     code: 'AGTHX',
//     quantity: 34,
//     buy_price: 84.33,
//     LTP: 79.11,
//     asset_class: 'mutual_fund',
//   },
//   {
//     name: 'Finance Contrafund',
//     code: 'FCNTX',
//     quantity: 85,
//     buy_price: 12.22,
//     LTP: 20.11,
//     asset_class: 'mutual_fund',
//   },
//   {
//     name: 'Morg Stan I Lq',
//     code: 'MVRXX',
//     quantity: 188,
//     buy_price: 1.0,
//     LTP: 1.0,
//     asset_class: 'mutual_fund',
//   },
// ];

// export var dummy_data_bonds: BondHolding[] = [
//   {
//     name: 'Vanguard 500 Idx:Adm',
//     code: 'VFIAX',
//     quantity: 100,
//     buy_price: 400.34,
//     LTP: 419.68,
//     asset_class: 'government_bonds',
//   },
//   {
//     name: 'Finance 500 Index fund',
//     code: 'FXAIX',
//     quantity: 20,
//     buy_price: 160.45,
//     LTP: 157.76,
//     asset_class: 'government_bonds',
//   },
//   {
//     name: 'SPDR S&P 500 ETF',
//     code: 'SPY',
//     quantity: 12,
//     buy_price: 439.45,
//     LTP: 452.77,
//     asset_class: 'corporate_bonds',
//   },
// ];

// export var dummy_data_order: TradeStock[] = [
//   {
//     name: 'Apple Inc',
//     code: 'AAPL',
//     quantity: 100,
//     price: 155.34,
//     asset_class: 'main_index_stocks',
//     trade_type: 'buy',
//     date: '2021/02/28',
//     time: '09:10',
//   },
//   {
//     name: 'Tesla Inc',
//     code: 'TSLA',
//     quantity: 20,
//     price: 657.65,
//     asset_class: 'main_index_stocks',
//     trade_type: 'buy',
//     date: '2021/03/23',
//     time: '11:40',
//   },
//   {
//     name: 'Amazon.com Inc',
//     code: 'AMZN',
//     quantity: 12,
//     price: 2354.34,
//     asset_class: 'main_index_stocks',
//     trade_type: 'buy',
//     date: '2021/04/23',
//     time: '14:00',
//   },
//   {
//     name: 'Vinco Ventures',
//     code: 'BBIG',
//     quantity: 550,
//     price: 5.56,
//     asset_class: 'small_cap_company_stocks',
//     trade_type: 'buy',
//     date: '2021/07/08',
//     time: '12:20',
//   },
//   {
//     name: 'Microsoft Corp',
//     code: 'MSFT',
//     quantity: 34,
//     price: 350.76,
//     asset_class: 'small_cap_company_stocks',
//     trade_type: 'buy',
//     date: '2021/07/02',
//     time: '13:18',
//   },
//   {
//     name: 'Sphere 3D Corp',
//     code: 'ANY',
//     quantity: 85,
//     price: 6.42,
//     asset_class: 'small_cap_company_stocks',
//     trade_type: 'buy',
//     date: '2021/07/13',
//     time: '10:10',
//   },
//   {
//     name: 'Lucid Group Inc Shs',
//     code: 'LCID',
//     quantity: 188,
//     price: 22.33,
//     asset_class: 'international_market_stocks',
//     trade_type: 'buy',
//     date: '2021/06/18',
//     time: '14:54',
//   },
//   {
//     name: 'Aliaba Group Holding Ltd ADR',
//     code: 'BABA',
//     quantity: 30,
//     price: 175.5,
//     asset_class: 'international_market_stocks',
//     trade_type: 'buy',
//     date: '2021/04/23',
//     time: '14:22',
//   },
//   {
//     name: 'Tesla Inc',
//     code: 'TSLA',
//     quantity: 20,
//     price: 657.65,
//     asset_class: 'main_index_stocks',
//     trade_type: 'sell',
//     date: '2021/08/03',
//     time: '13:12',
//   },
//   {
//     name: 'Amazon.com Inc',
//     code: 'AMZN',
//     quantity: 12,
//     price: 2354.34,
//     asset_class: 'main_index_stocks',
//     trade_type: 'sell',
//     date: '2021/05/28',
//     time: '11:04',
//   },
//   {
//     name: 'Vinco Ventures',
//     code: 'BBIG',
//     quantity: 550,
//     price: 5.56,
//     asset_class: 'small_cap_company_stocks',
//     trade_type: 'sell',
//     date: '2021/05/23',
//     time: '10:07',
//   },
//   {
//     name: 'Microsoft Corp',
//     code: 'MSFT',
//     quantity: 34,
//     price: 350.76,
//     asset_class: 'small_cap_company_stocks',
//     trade_type: 'sell',
//     date: '2021/06/23',
//     time: '9:45',
//   },
//   {
//     name: 'Tesla Inc',
//     code: 'TSLA',
//     quantity: 20,
//     price: 650.65,
//     asset_class: 'main_index_stocks',
//     trade_type: 'buy',
//     date: '2021/09/03',
//     time: '11:12',
//   },
//   {
//     name: 'Amazon.com Inc',
//     code: 'AMZN',
//     quantity: 12,
//     price: 2154.34,
//     asset_class: 'main_index_stocks',
//     trade_type: 'buy',
//     date: '2021/08/28',
//     time: '13:04',
//   },
//   {
//     name: 'Vinco Ventures',
//     code: 'BBIG',
//     quantity: 550,
//     price: 4.56,
//     asset_class: 'small_cap_company_stocks',
//     trade_type: 'buy',
//     date: '2021/07/23',
//     time: '11:07',
//   },
//   {
//     name: 'Microsoft Corp',
//     code: 'MSFT',
//     quantity: 34,
//     price: 310.76,
//     asset_class: 'small_cap_company_stocks',
//     trade_type: 'buy',
//     date: '2021/07/26',
//     time: '12:45',
//   },
// ];

// export var users: User[] = [
//   new User(
//     'admin',
//     'SmallChange',
//     'Admin',
//     'admin@fmr.com',
//     0,
//     'eyJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjY0MzM5NDI4LCJpYXQiOjE2NjQzMzk0Mjh9.zOlVX1PR6cw2ip0MpzSAGChooJ4ipT8bzt7O6CLdmDg'
//   ),
//   new User(
//     'test',
//     'Test',
//     'User',
//     'testuser@fmr.com',
//     0,
//     'eyJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6InRlc3QiLCJleHAiOjE2NjQzMzk0MjgsImlhdCI6MTY2NDMzOTQyOH0.Y6x59p-Z4VYJZvM5xYqZigL7azc7ivfFaV2SzQfVNzY'
//   ),
// ];

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';


import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Go2BuyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about'; 
import { CategoryListPage } from '../pages/category-list/category-list';
//import { CategoriesPage } from '../pages/categories/categories';
//import { TabsPage } from '../pages/tabs/tabs';
import { ProductDetailPage } from '../pages/product-detail/product-detail';

// Providers
import { ProductProvider } from '../providers/product/product';
import { CategoryProvider } from '../providers/category/category';
import { MallProvider } from '../providers/mall/mall';
import { WishProvider } from '../providers/wish/wish';


@NgModule({
  declarations: [
    Go2BuyApp,
    HomePage,
    AboutPage,
    CategoryListPage,
    ProductDetailPage
  ],
  imports: [
    BrowserModule,
    //IonicModule.forRoot(Go2BuyApp)
    IonicModule.forRoot(Go2BuyApp,
      {},
      {
        links:[
          {component: ProductDetailPage, name: 'ProductDetailPage',segment: 'product-detail'},
          {component: CategoryListPage, name: 'CategoryListPage',segment: 'category-list'}
        ]
      }),
      IonicStorageModule.forRoot(),
      HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Go2BuyApp,
    HomePage,
    AboutPage,
    CategoryListPage,
    ProductDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider,
    CategoryProvider,
    MallProvider,
    WishProvider
  ]
})
export class AppModule {}

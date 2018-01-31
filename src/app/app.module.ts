import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Go2BuyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module';
import { MenuPageModule } from '../pages/menu/menu.module';

import { HomePageModule } from '../pages/home/home.module';

import { MallListPageModule } from '../pages/mall-list/mall-list.module';
import { CategoryListPageModule } from '../pages/category-list/category-list.module';
import { ProductListPageModule } from '../pages/product-list/product-list.module';
//import { ProductDetailPage } from '../pages/product-detail/product-detail';
//import { AboutPage } from '../pages/about/about'; 
//import { TabsPage } from '../pages/tabs/tabs';

// Providers
import { MallProvider } from '../providers/mall/mall';
import { CategoryProvider } from '../providers/category/category';
import { ProductProvider } from '../providers/product/product';
import { WishProvider } from '../providers/wish/wish';
import { AuthProvider } from '../providers/auth/auth';


@NgModule({
  declarations: [
    Go2BuyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Go2BuyApp),
    /*IonicModule.forRoot(Go2BuyApp,
      {},
      {
        links:[
          {component: MallListPage, name: 'MallListPage',segment: 'mall-list'},
          {component: CategoryListPage, name: 'CategoryListPage',segment: 'category-list'},
          {component: ProductListPage, name: 'ProductListPage',segment: 'product-list'},
          {component: ProductDetailPage, name: 'ProductDetailPage',segment: 'product-detail'}
        ]
      }),
      //*/
    IonicStorageModule.forRoot({
      name: '__Go2BuyDB',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpModule,
    LoginPageModule,
    MenuPageModule,
    HomePageModule,
    
    MallListPageModule,
    CategoryListPageModule,
    ProductListPageModule,
    //ProductDetailPage
    //AboutPage,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Go2BuyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MallProvider,
    CategoryProvider,
    ProductProvider,
    WishProvider,
    AuthProvider
  ]
})
export class AppModule {}

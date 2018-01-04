//import { Component } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
//import { Platform } from 'ionic-angular';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { CategoryListPage } from '../pages/category-list/category-list';
import { ProductDetailPage } from '../pages/product-detail/product-detail';


export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  //logsOut?: boolean;
  //index?: number;
  //tabName?: string;
  //tabComponent?: any;
}

@Component({
  templateUrl: 'app.template.html'
})

export class Go2BuyApp {
  //@ViewChild(Nav) nav: Nav;
  @ViewChild('NAV') nav: Nav;
  //*
  appPages: PageInterface[] = [
    { title: 'Home', name: 'TabsPage', component: HomePage, icon: 'home' },
    { title: 'Products', name: 'TabsPage', component: CategoryListPage, icon: 'home' },
    { title: 'About', name: 'TabsPage', component: AboutPage, icon: 'information-cicle' },
    //{ title: 'Schedule', name: 'TabsPage', component: MallsPage, tabComponent: MallsPage, index: 0, icon: 'calendar' },
    //{ title: 'Speakers', name: 'TabsPage', component: MallsPage, tabComponent: MallsPage, index: 1, icon: 'contacts' },
    //{ title: 'Map', name: 'TabsPage', component: MallsPage, tabComponent: MallsPage, index: 2, icon: 'map' },
    //{ title: 'Product', name: 'ProductDetailPage', component: ProductDetailPage, tabComponent: ProductDetailPage, index: 3, icon: 'information-circle' }
  ];
  /*
  loggedInPages: PageInterface[] = [
    { title: 'Account', name: 'AccountPage', component: MallsPage, icon: 'person' },
    { title: 'Support', name: 'SupportPage', component: MallsPage, icon: 'help' },
    { title: 'Logout', name: 'TabsPage', component: MallsPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Login', name: 'LoginPage', component: MallsPage, icon: 'log-in' },
    { title: 'Support', name: 'SupportPage', component: MallsPage, icon: 'help' },
    { title: 'Signup', name: 'SignupPage', component: MallsPage, icon: 'person-add' }
  ];*/
  rootPage:any = HomePage;

  
  constructor(
    public events: Events,
    //public userData: UserData,
    public menu: MenuController,
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page)
  {
    this.nav.setRoot(page);
  }
}


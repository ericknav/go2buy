//import { Component } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
//import { Platform } from 'ionic-angular';
import { Events, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { BasePage } from '../helpers/base-page';
import { PageInterface } from '../helpers/interfaces';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
//*
import { MallListPage } from '../pages/mall-list/mall-list';
import { CategoryListPage } from '../pages/category-list/category-list';
import { ProductListPage } from '../pages/product-list/product-list';
import { AboutPage } from '../pages/about/about';
//*/

@Component({
  templateUrl: 'app.template.html'
})

//export class Go2BuyApp extends BasePage { 
export class Go2BuyApp { 
  //*
  @ViewChild(Nav) nav: Nav;
  //@ViewChild('NAV') nav: Nav;
  
  linksPagesMenu: PageInterface[] = [
    { title: 'Home', name: 'TabsPage', component: HomePage, icon: 'home', controller: this.nav },
    { title: 'Supermercados', name: 'TabsPage', component: MallListPage, icon: 'cart', controller: this.nav },
    { title: 'Categorias', name: 'TabsPage', component: CategoryListPage, icon: 'list-box', controller: this.nav },
    { title: 'Productos', name: 'TabsPage', component: ProductListPage, icon: 'cafe', controller: this.nav },
    { title: 'Lista', name: 'TabsPage', component: ProductListPage, icon: 'clipboard', controller: this.nav },
    { title: 'About', name: 'TabsPage', component: AboutPage, icon: 'information-circle', controller: this.nav },
    //{ title: 'Schedule', name: 'TabsPage', component: MallsPage, tabComponent: MallsPage, index: 0, icon: 'calendar' },
    //{ title: 'Speakers', name: 'TabsPage', component: MallsPage, tabComponent: MallsPage, index: 1, icon: 'contacts' },
    //{ title: 'Map', name: 'TabsPage', component: MallsPage, tabComponent: MallsPage, index: 2, icon: 'map' },
    //{ title: 'Product', name: 'ProductDetailPage', component: ProductDetailPage, tabComponent: ProductDetailPage, index: 3, icon: 'information-circle' }
  ];
  //*/

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
  //rootPage:any = HomePage;
  rootPage:any = LoginPage;

  
  constructor(
    //public events: Events,
    //public userData: UserData,
    //public menu: MenuController,
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
  ) {
    //super();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /*
  goToPage(page)
  {
    this.nav.setRoot(page);
  }
  //*/
}


import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';

import { MallListPage } from '../mall-list/mall-list';
import { CategoryListPage } from '../category-list/category-list';
import { ProductListPage } from '../product-list/product-list';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  // set the root pages for each tab
  tabMallRoot: any = MallListPage;
  tabCategoryRoot: any = CategoryListPage;
  tabProductsRoot: any = ProductListPage;
  //tabWhishRoot: any = CategoryListPage;
  //tabAboutRoot: any = CategoryListPage;
  mySelectedIndex: number;

  //constructor(public navCtrl: NavController, public navParams: NavParams) {}

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

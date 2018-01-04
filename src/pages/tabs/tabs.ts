import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';

import { CategoryListPage } from '../category-list/category-list';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  // set the root pages for each tab
  tabProductsRoot: any = CategoryListPage;
  tabMallsRoot: any = CategoryListPage;
  tabWhishRoot: any = CategoryListPage;
  tabAboutRoot: any = CategoryListPage;
  mySelectedIndex: number;

  //constructor(public navCtrl: NavController, public navParams: NavParams) {}

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, LoadingController } from 'ionic-angular';

import { BasePage } from '../../helpers/base-page';
import { PageInterface } from '../../helpers/interfaces';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage extends BasePage {
  @ViewChild(Nav) nav: Nav;

  linksPagesMenu: PageInterface[] = [
    { title: 'Supermercados', name: 'TabsPage', component: 'MallListPage', index: 0, icon: 'cart', controller: this.nav },
    { title: 'Categorias', name: 'TabsPage', component: 'CategoryListPage', index: 1, icon: 'list-box', controller: this.nav },
    { title: 'Productos', name: 'TabsPage', component: 'ProductListPage', index: 2, icon: 'cafe', controller: this.nav }

  ];
  /*
  linksPagesContent: PageInterface[] = [
		{ title: 'Supermercados', name: 'TabsPage', component: MallListPage, icon: 'cart', controller: this.nav },
		{ title: 'Categorias', name: 'TabsPage', component: CategoryListPage, icon: 'list-box', controller: this.nav },
		{ title: 'Productos', name: 'TabsPage', component: ProductListPage, icon: 'cafe', controller: this.nav }
    ];
  */

  constructor(
    private navCtrl: NavController,
    protected auth: AuthProvider,
    protected navParams: NavParams,
    protected loadingCtrl: LoadingController
  ) {
    super(auth,navParams,loadingCtrl);
  }

}

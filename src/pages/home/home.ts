import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { BasePage } from '../../helpers/base-page';
import { AuthProvider } from '../../providers/auth/auth';
import { PageInterface } from '../../helpers/interfaces';
import { MallListPage } from '../mall-list/mall-list';
import { CategoryListPage } from '../category-list/category-list';
import { ProductListPage } from '../product-list/product-list';

//import { Subscriber } from 'rxjs/Subscriber';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage extends BasePage {
	

	linksPagesContent: PageInterface[] = [
		{ title: 'Supermercados', name: 'TabsPage', component: MallListPage, icon: 'cart', controller: this.nav },
		{ title: 'Categorias', name: 'TabsPage', component: CategoryListPage, icon: 'list-box', controller: this.nav },
		{ title: 'Productos', name: 'TabsPage', component: ProductListPage, icon: 'cafe', controller: this.nav }
	  ];

	  /*
	linksPagesFooter: PageInterface[] = [
		{ title: 'Home', name: 'TabsPage', component: HomePage, icon: 'home', controller: this.nav }
	];*/

	constructor(
		private nav: NavController,
		protected auth: AuthProvider,
		protected navParams: NavParams,
		protected loadingCtrl: LoadingController,
		protected storage: Storage,
	) {
		super(auth,navParams,loadingCtrl);
		storage.remove('mailId');
	}
	
	public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }
}

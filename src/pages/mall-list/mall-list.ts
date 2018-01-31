import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BasePage } from '../../helpers/base-page';
import { MallProvider } from '../../providers/mall/mall';
import { AuthProvider } from '../../providers/auth/auth';
import { CategoryListPage } from '../category-list/category-list';

@IonicPage()
@Component({
  selector: 'page-mall-list',
  templateUrl: 'mall-list.html',
})
export class MallListPage extends BasePage {
  constructor(
    private navCtrl: NavController,
    protected auth: AuthProvider,
    protected navParams: NavParams,
    protected loadingCtrl: LoadingController,
    private mallProvider: MallProvider
  ) {
    super(auth,navParams,loadingCtrl);
    super.getList(mallProvider);
  }

  itemClicked(item) : void {
    this.navCtrl.push(CategoryListPage, item);
  }
}

import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BasePage } from '../../helpers/base-page';
import { CategoryProvider } from '../../providers/category/category';
//    import { ProductList } from '../product-list/product-list';
import { ProductListPage } from '../product-list/product-list';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
})
export class CategoryListPage extends BasePage {
  private mallId: number;
  constructor(
    private navCtrl: NavController, 
    protected auth: AuthProvider,
    protected navParams: NavParams,
    protected loadingCtrl: LoadingController,
    private categoryProvider: CategoryProvider,
    private storage: Storage
  ) {
    super(auth,navParams,loadingCtrl);
    this.mallId = navParams.get('mallId');
    if(!(this.mallId===undefined)){
      storage.set('mailId',this.mallId).then((successData)=>{
        //console.log(successData);
      });
    }
    super.getList(categoryProvider);
  }

  /*
  public goToPagePush(controller: any, page: any, item?: any) : void {
    super.goToPagePush(controller, page, item);
  }*/

  itemClicked(item) : void {
    //super.goToPagePush(this.navCtrl, ProductListPage, item);
    //this.navCtrl.push(page: 'ProductList', item);
    this.navCtrl.push(ProductListPage, item);
    //ProductListPage
    //console.log(item);
  }
}

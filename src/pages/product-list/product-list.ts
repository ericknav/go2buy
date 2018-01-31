import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BasePage } from '../../helpers/base-page';
import { ProductProvider } from '../../providers/product/product';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage extends BasePage {
  private categoryId: number;
  constructor(
    private navCtrl: NavController, 
    protected auth: AuthProvider,
    protected navParams: NavParams,
    protected loadingCtrl: LoadingController,
    private productProvider: ProductProvider,
    private storage: Storage
  ) {
    super(auth,navParams,loadingCtrl);
    this.categoryId = navParams.get('categoryId');
    this.categoryId = (this.categoryId===undefined)?0:this.categoryId;

    storage.get('mailId').then((mallId) => {
      if(mallId==null){
        super.getList(productProvider,this.categoryId);
      }else{
        super.getList(productProvider,mallId,this.categoryId,0);
      }
    }).catch(() => console.log("Error with get storage."));
    storage.remove('mailId');
  }
}

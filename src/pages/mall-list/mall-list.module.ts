import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MallListPage } from './mall-list';

@NgModule({
  declarations: [
    MallListPage,
  ],
  imports: [
    IonicPageModule.forChild(MallListPage),
  ],
})
export class MallListPageModule {}

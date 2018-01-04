import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryListPage } from '../category-list/category-list';

import { CategoryProvider } from '../../providers/category/category';
//import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	lists:any[] = [];
	categoryList = [];

	constructor(
		public navCtrl: NavController,
		private categoryProvider: CategoryProvider
	) {
		this.getCategoryList();
		/*
  	this.lists.push({
  		name: 'group A'
  	});
  	this.lists.push({
  		name: 'group B'
  	});
  	this.lists.push({
  		name: 'group C'
		});
		*/
  }

  goToCategoryListPage(){
  	this.navCtrl.push(CategoryListPage);
  }

  getCategoryList(){
		this.categoryProvider.getCategory()
			.subscribe(
				data => { 
					this.categoryList = data; 
					//console.log(this.categoryList); 
					//console.log(data);
				}/*,
				err =>{
					console.error("Error : "+err);
				} ,
				() => {
					console.log('getData completed');
					console.log(this.categoryList);
				}*/
			);
	}
}

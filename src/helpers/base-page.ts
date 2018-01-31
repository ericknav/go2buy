import { AuthProvider } from "../providers/auth/auth";

export class BasePage {
	private username: string = '';
	private email: string = '';
	public item: any;
    public listData: any[];

	constructor(
		protected auth: AuthProvider,
		protected navParams?: any,
		protected loadingCtrl?: any
	){
		let info = this.auth.getUserInfo();
		if(!(info===undefined)){
			this.username = info['name'];
			this.email = info['email'];
		}

		if(!(navParams===undefined)){
			this.item = navParams.data;
		}
	}

    public getList(provider,id1?,id2?,id3?,id4?,id5?){
		this.loading();
		provider.getList(id1,id2,id3,id4,id5)
			.subscribe(
				data => { 
					this.listData = data; 
					//console.log(data);
				},
				err =>{
					console.error("Error : "+err);
				} ,
				() => {
					//console.log('getData completed');
				}
			);
	}

	public goToPagePush(controller: any, page: any, item?: any) : void {
        controller.push(page,item); 
	}

	public goToPageSetRoot(controller: any, page: any) : void {
        controller.setRoot(page); 
	}
	
	public isActive(page: any){

	}

	public loading() {
		let loader = this.loadingCtrl.create({
		  spinner: "bubbles",
		  content: "Please wait...",
		  duration: 300
		});
		loader.present();
	  }
}
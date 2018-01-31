import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { CONFIG } from '../config/config';

export class BaseProvider {
    private url: string = CONFIG.apiEndpoint;
    private params: string;
    constructor(protected http: any, protected method: string) {
        this.url += method;
    }

    public getList(id1?,id2?,id3?,id4?,id5?){
        this.params  = (id1===undefined)?'':'/'+id1;
        this.params += (id2===undefined)?'':'/'+id2;
        this.params += (id3===undefined)?'':'/'+id3;
        this.params += (id4===undefined)?'':'/'+id4;
        this.params += (id5===undefined)?'':'/'+id5;
        return this.http.get(this.url+this.params)
          .map(this.extracData)
          //.do(this.logResponse)
          .catch(this.catchError)
          ;
    }

    private extracData(res: Response){
        return res.json();
    }
    
    private logResponse(res: Response){
        console.log(res);
    }
    
    private catchError(error: Response | any){
        console.log(error);
        return Observable.throw(error.json().error || "Server error.");
    }
}
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Endpoints } from '../../providers/endpoints';
//import 'rxjs/add/operator/Promise';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 


@Injectable()
export class PlacesService {
    data:any;

    constructor(private authHttp: AuthHttp, private endpoints: Endpoints) {}

    getPlaceSVC() {
        return new Promise( resolve =>
            this.authHttp.get(this.endpoints.getPlaces())
            .map(res => res.json())
            .subscribe(data => {
                this.data= data;
                resolve(this.data);
            })
        )};
}
   
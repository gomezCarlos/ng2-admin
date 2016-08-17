import { Injectable, Inject} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import { Hal } from './Hal';
import { PaginatedList } from './PaginatedList.component';
import { UserService } from './user.service';
@Component({
        providers:[UserService]
})
@Injectable()
export class Service<T extends Hal> {

	//url for the rest backend of this service.
	urlBackend: string;
	// the type of object wrapped by the response, paginated or not.
	object: T;

	//inject the http object for managing requests
	constructor( private _http : Http, private userService: UserService){
		
	}
	//handle the error, you should implements what to do.
	private getError(error: any) { return Observable.throw(error); }

	//handle the response as a json object, it will fail with an empty response.
	private getData(r: Response){ if(r != null) return r.json(); else return null}

	//define the basic options for the request.
	private getOptions(){

		let headers = new Headers({
			'Content-Type':'application/json',
			'Access-Control-Allow-Origin': '*',
			'X-Auth-Token': this.userService.getToken().toString(),
		})
		let options = new RequestOptions({headers: headers})
		return options;
	}

	//getter for the url of the rest service.
	getUrlBackend(){
		return this.urlBackend;
	}
	//setter for the url of the rest service.
	setUrlBackend(url: string) {
		this.urlBackend = url;
	}
	//save the object
	save(object : T): Observable<T>{
		//let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    	let requestOptions = this.getOptions();//new RequestOptions({ headers: headers });
		let url ='';
		
		if(object.ids!=null){
			url = this.urlBackend+"/"+object.ids;
					return this._http.put(url,JSON.stringify(object),requestOptions)
					.map(this.getData)
					.catch(this.getError)
		}
		else{
			url = this.urlBackend;
					return this._http.post(url,JSON.stringify(object),requestOptions)
					.map(this.getData)
					.catch(this.getError)
		}
	}
	//delete the object, this could generate an empty response.
	delete(object : T): Observable<Response>{
		return this._http.delete(this.urlBackend+"/"+object.ids,this.getOptions).map(this.getData).catch(this.getError);
	}
	//find one object by its id.
	find(id : number): Observable<T>{
		//let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    	//let requestOptions = new RequestOptions({ headers: headers });
    	return this._http.get(this.getUrlBackend()+"/"+id,this.getOptions)
    	  .map(this.getData)
    	  .catch(this.getError);
	}
	//get a paginated response wrapping an array of obects
	getPage(page : number,size? : number): Observable<PaginatedList<T>>{
		const perPage = 10;
		
		let params = new URLSearchParams();
		if(size)
		  params.set("size",size.toString());
		else
		  params.set("size",perPage.toString());
		params.set("page",page.toString());
		let headers = new Headers({ 'Content-Type': 'application/json', 
			'Access-Control-Allow-Origin': '*' ,
			'X-Auth-Token': this.userService.getToken().toString()
		});

    	let requestOptions = new RequestOptions({ headers: headers, search: params });
    	return this._http.get(this.urlBackend,requestOptions)
			.map(this.getData)
			.catch(this.getError)
			;
	}

	getAll(): Observable<Array<T>>{
                let params = new URLSearchParams();
                let headers = new Headers({ 'Content-Type': 'application/json', 
                	'Access-Control-Allow-Origin': '*', 
                	'X-Auth-Token': this.userService.getToken().toString() });
		let requestOptions = new RequestOptions({ headers: headers, search: params });
        	return this._http.get(this.urlBackend,requestOptions)
                        .map(this.getArray)
                        .catch(this.getError)
                        ;

	}

	getArray(r: Response){
		var result: any;
		if(r!=null){
			result = r.json();
			if(result._embedded)
			return result._embedded;
		}
		result = [];
		return result;
	}
}

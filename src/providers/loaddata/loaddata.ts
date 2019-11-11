import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoaddataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaddataProvider {
  searchroom: any;
  searchnamroom: any;
  searchroomname(val: any) {
    throw new Error("Method not implemented.");
  }

  constructor(public http: HttpClient) {
    console.log('Hello LoaddataProvider Provider');
  }


    getcondominium(){
      const url = 'http://localhost/todoslim3/public/condominium';
      return this.http.get(url);
   }

    getapartamen(){
      const url = 'http://localhost/todoslim3/public/apartamen ';
      return this.http.get(url);
    }

    getmansion(){
      const url = 'http://localhost/todoslim3/public/mansion';
      return this.http.get(url);
    }

    getdorm(){
      const url = 'http://localhost/todoslim3/public/dorm';
      return this.http.get(url);
    }

    searchrooms(query){
      let url = 'http://localhost/todoslim3/public/search/'+query;
      return this.http.get(url);
    }
    
   loadroom(){
     let url = 'http://localhost/todoslim3/public/index.php/room/';
     return this.http.get(url);
   }

   showroom(name_rentedroom){
    let url = 'http://localhost/todoslim3/public/index.php/showroom/'+name_rentedroom;
    return this.http.get(url);
  }
}

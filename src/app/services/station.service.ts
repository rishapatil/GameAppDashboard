// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class StationService {

  // constructor(private http: Http) { }
  constructor(private http: HttpClient) { }

  public stationsBS = new BehaviorSubject<Object>(null);

getStations() {
    // return this.http.get('http://localhost:3000/pages')
    //     .map(res => res.json());
    return this.http.get('http://localhost:4000/stations');
}

getEditStation(id) {
    // return this.http.get('http://localhost:3000/pages/edit-page/' + id)
    //     .map(res => res.json());
    return this.http.get('http://localhost:4000/stations/edit-station/' + id);
}

postEditStation(value) {
    // return this.http.post('http://localhost:3000/pages/edit-page/'+value.id, value)
    //     .map(res => res.json());
    return this.http.post('http://localhost:4000/stations/edit-station/'+value.id, value);
}

deleteStation(id) {
    // return this.http.get('http://localhost:3000/pages/delete-page/' + id)
    //     .map(res => res.json());
    return this.http.get('http://localhost:4000/stations/delete-station/' + id);
}

postAddStation(value) {
    // return this.http.post('http://localhost:3000/pages/add-page', value)
    //     .map(res => res.json());
    return this.http.post('http://localhost:4000/stations/add-station', value);
}


}

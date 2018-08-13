// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class DeviceService {

  // constructor(private http: Http) { }
  constructor(private http: HttpClient) { }

  public devicesBS = new BehaviorSubject<Object>(null);

getDevices() {
    // return this.http.get('http://localhost:3000/pages')
    //     .map(res => res.json());
    return this.http.get('http://localhost:4000/devices');
}

getEditDevice(id) {
    // return this.http.get('http://localhost:3000/pages/edit-page/' + id)
    //     .map(res => res.json());
    return this.http.get('http://localhost:4000/devices/edit-device/' + id);
}

postEditDevice(value) {
    // return this.http.post('http://localhost:3000/pages/edit-page/'+value.id, value)
    //     .map(res => res.json());
    return this.http.post('http://localhost:4000/devices/edit-device/'+value.id, value);
}

deleteDevice(id) {
    // return this.http.get('http://localhost:3000/pages/delete-page/' + id)
    //     .map(res => res.json());
    return this.http.get('http://localhost:4000/devices/delete-device/' + id);
}

postAddDevice(value) {
    // return this.http.post('http://localhost:3000/pages/add-page', value)
    //     .map(res => res.json());
    return this.http.post('http://localhost:4000/devices/add-device', value);
}


}

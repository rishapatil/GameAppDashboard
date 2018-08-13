// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class WinningnosService {

  constructor(private http: HttpClient) { }

  public winningnosBS = new BehaviorSubject<Object>(null);

    getgameresults() {
        // return this.http.get('http://localhost:3000/pages')
        //     .map(res => res.json());
        return this.http.get('http://localhost:4000/gameresults');
    }

    getWinningnos() {
        // return this.http.get('http://localhost:3000/pages')
        //     .map(res => res.json());
        return this.http.get('http://localhost:4000/gameresults');
    }

    getEditWinningno(id) {
        // return this.http.get('http://localhost:3000/pages/edit-page/' + id)
        //     .map(res => res.json());
        return this.http.get('http://localhost:4000/users/edit-winningno/' + id);
    }

    postEditWinningno(value) {
        // return this.http.post('http://localhost:3000/pages/edit-page/'+value.id, value)
        //     .map(res => res.json());
        return this.http.post('http://localhost:4000/users/edit-winningno/'+value.id, value);
    }

    deleteWinningno(id) {
        // return this.http.get('http://localhost:3000/pages/delete-page/' + id)
        //     .map(res => res.json());
        return this.http.get('http://localhost:4000/users/delete-winningno/' + id);
    }

    postAddWinningno(value) {
        // return this.http.post('http://localhost:3000/pages/add-page', value)
        //     .map(res => res.json());
        return this.http.post('http://localhost:4000/gameresults/add-winningno', value);
    }

}

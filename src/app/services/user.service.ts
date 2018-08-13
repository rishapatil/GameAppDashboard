// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    // constructor(private http: Http) { }
    constructor(private http: HttpClient) { }

    public usersBS = new BehaviorSubject<Object>(null);

    getUsers() {
        // return this.http.get('http://localhost:3000/pages')
        //     .map(res => res.json());
        return this.http.get('http://localhost:4000/users');
    }

    getEditUser(id) {
        // return this.http.get('http://localhost:3000/pages/edit-page/' + id)
        //     .map(res => res.json());
        return this.http.get('http://localhost:4000/users/edit-user/' + id);
    }

    postEditUser(value) {
        // return this.http.post('http://localhost:3000/pages/edit-page/'+value.id, value)
        //     .map(res => res.json());
        return this.http.post('http://localhost:4000/users/edit-user/'+value.id, value);
    }

    deleteUser(id) {
        // return this.http.get('http://localhost:3000/pages/delete-page/' + id)
        //     .map(res => res.json());
        return this.http.get('http://localhost:4000/users/delete-user/' + id);
    }

    postAddUser(value) {
        // return this.http.post('http://localhost:3000/pages/add-page', value)
        //     .map(res => res.json());
        return this.http.post('http://localhost:4000/users/add-user', value);
    }

    register(user) {
        // return this.http.post('http://localhost:3000/users/register', user)
        //     .map(res => res.json());
        return this.http.post('http://localhost:4000/users/register', user);
    }

    login(user) {
        // return this.http.post('http://localhost:3000/users/login', user)
        //     .map(res => res.json());
        return this.http.post('http://localhost:4000/users/login', user);
    }

}

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';

declare var CKEDITOR: any;

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {

    user: any;
    username: string;
    password: string;
    id: string;
    successMsg: boolean = false;
    errorMsg: boolean = false;
    errorMsg2: boolean = false;
    param: any;
    sidebar: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user") !== "\"admin\"") {
      this.router.navigateByUrl('');
  } else {
    //CKEDITOR.replace('username');
      //CKEDITOR.replace('password');
  }

  this.route.params.subscribe(params => {
    this.param = params['id'];
    this.userService.getEditUser(this.param).subscribe(user => {
        this.user = user;
        this.username = user["username"];
        this.password = user["password"];
        this.id = user["_id"];
        
    });
});

  }

  editUser({ value, valid}) {
    if (valid) {
       // value.content = CKEDITOR.instances.content.getData();
        this.userService.postEditUser(value).subscribe(res => {
            if (res == 'userExists') {
                this.errorMsg = true;
                setTimeout(function() {
                    this.errorMsg = false;
                }.bind(this),2000);
            } else if (res == 'problem') {
                this.errorMsg2 = true;
                setTimeout(function() {
                    this.errorMsg2 = false;
                }.bind(this),2000);
            } else {
                this.successMsg = true;
                setTimeout(function() {
                    this.successMsg = false;
                }.bind(this),2000);

                this.userService.getUsers().subscribe(users => {
                    this.userService.usersBS.next(users);
                });
            }
        });
    } else {
        console.log('Form is not valid.');
    }
}

}

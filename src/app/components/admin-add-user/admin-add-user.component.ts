import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';

declare var CKEDITOR: any;

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent implements OnInit {
  public successMsg: boolean = false;
  public errorMsg: boolean = false;
  public username: string;
  public password: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user") !== "\"admin\"") {
      this.router.navigateByUrl('');
  } else {
     // CKEDITOR.replace('content');
  }
  }

  addUser({form, value, valid}) {
    form.reset();
    if (valid) {
       // value.content = CKEDITOR.instances.content.getData();
        this.userService.postAddUser(value).subscribe(res => {
            if (res == 'userExists') {
                this.errorMsg = true;
                setTimeout(function() {
                    this.errorMsg = false;
                }.bind(this),2000);
            } else {
                this.successMsg = true;
                setTimeout(function() {
                    this.successMsg = false;
                }.bind(this),2000);

                CKEDITOR.instances.content.setData('');

                this.userService.getUsers().subscribe(users => {
                    this.userService.usersBS.next(users);
                })
            }
        });
    } else {
        console.log('Form is not valid.');
    }
}

}

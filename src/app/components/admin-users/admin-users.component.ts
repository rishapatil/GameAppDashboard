import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  //users: any;
  public users: any;
  successMsg: boolean = false;
  errorMsg: boolean = false;

  constructor(
      private router: Router,
      private userService: UserService
  ) { }

  ngOnInit() {
    
      if (localStorage.getItem("user") !== "\"admin\"") this.router.navigateByUrl('');
      //this.users = this.userService.usersBS;
  
     this.userService.getUsers().subscribe(users => {
        this.users = users;
    });
  }

  deleteUser(id) {
      if (confirm('Confirm deletion')) {
          this.userService.deleteUser(id).subscribe(res => {
              if (res == 'error') {
                  this.errorMsg = true;
                  setTimeout(function() {
                      this.errorMsg = false;
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
      }
  }


}

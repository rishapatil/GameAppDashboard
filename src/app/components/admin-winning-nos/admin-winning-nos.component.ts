import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WinningnosService } from './../../services/winningnos.service';

@Component({
  selector: 'app-admin-winning-nos',
  templateUrl: './admin-winning-nos.component.html',
  styleUrls: ['./admin-winning-nos.component.css']
})
export class AdminWinningNosComponent implements OnInit {

 /*constructor() { }

  ngOnInit() {
  }*/

  //users: any;
  public winningnos: any;
  successMsg: boolean = false;
  errorMsg: boolean = false;

  constructor(
      private router: Router,
      private winningnosService: WinningnosService
  ) { }

  ngOnInit() {
    
      if (localStorage.getItem("user") !== "\"admin\"") this.router.navigateByUrl('');
      //this.users = this.userService.usersBS;
  
     this.winningnosService.getgameresults().subscribe(winningnos => {
        this.winningnos = winningnos;
    });
  }

 /* deleteUser(id) {
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
  } */


}

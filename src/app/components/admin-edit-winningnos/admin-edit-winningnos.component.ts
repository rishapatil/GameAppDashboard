import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { WinningnosService } from './../../services/winningnos.service';

declare var CKEDITOR: any;

@Component({
  selector: 'app-admin-edit-winningnos',
  templateUrl: './admin-edit-winningnos.component.html',
  styleUrls: ['./admin-edit-winningnos.component.css']
})
export class AdminEditWinningnosComponent implements OnInit {

  winningno: any;
  game_type: string;
  result_date: string;
  id: string;
  successMsg: boolean = false;
  errorMsg: boolean = false;
  errorMsg2: boolean = false;
  param: any;
  sidebar: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private winningnosService: WinningnosService
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
    this.winningnosService.getEditWinningno(this.param).subscribe(winningno => {
        this.winningno = winningno;
        this.game_type = winningno["game_type"];
        this.result_date = winningno["result_date"];
        this.id = winningno["_id"];
        
    });
});
  }

editWinningno({ value, valid}) {
  if (valid) {
     // value.content = CKEDITOR.instances.content.getData();
      this.winningnosService.postEditWinningno(value).subscribe(res => {
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

              this.winningnosService.getWinningnos().subscribe(winningnos => {
                  this.winningnosService.winningnosBS.next(winningnos);
              });
          }
      });
  } else {
      console.log('Form is not valid.');
  }
}

}



import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { WinningnosService } from './../../services/winningnos.service';

//declare var CKEDITOR: any;

@Component({
  selector: 'app-admin-addwinningno',
  templateUrl: './admin-addwinningno.component.html',
  styleUrls: ['./admin-addwinningno.component.css']
})
export class AdminAddwinningnoComponent implements OnInit {

  public successMsg: boolean = false;
  public errorMsg: boolean = false;
  public game_type: string;
  public result_date: string;
  public number_one: string;
  public number_two: string;
  public number_three: string;
  public number_four: string;
  public number_five: string;
  public number_six: string;
  public number_seven: string;
  public bonus_no: string;

  constructor(
    private router: Router,
    private winningnosService: WinningnosService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user") !== "\"admin\"") {
      this.router.navigateByUrl('');
  } else {
     // CKEDITOR.replace('content');
  }
  }

  addWinningno({form, value, valid}) {
    form.reset();
    if (valid) {
       // value.content = CKEDITOR.instances.content.getData();
        this.winningnosService.postAddWinningno(value).subscribe(res => {
            if (res == 'gameresultExists') {
                this.errorMsg = true;
                setTimeout(function() {
                    this.errorMsg = false;
                }.bind(this),2000);
            } else {
                this.successMsg = true;
                setTimeout(function() {
                    this.successMsg = false;
                }.bind(this),2000);

               // CKEDITOR.instances.content.setData('');

                this.winningnosService.getWinningnos().subscribe(winningnos => {
                    this.winningnosService.winningnosBS.next(winningnos);
                })
            }
        });
    } else {
        console.log('Form is not valid.');
    }
}

}

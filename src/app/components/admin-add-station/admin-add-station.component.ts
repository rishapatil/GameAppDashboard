import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { StationService } from './../../services/station.service';

@Component({
  selector: 'app-admin-add-station',
  templateUrl: './admin-add-station.component.html',
  styleUrls: ['./admin-add-station.component.css']
})
export class AdminAddStationComponent implements OnInit {

  public successMsg: boolean = false;
  public errorMsg: boolean = false;
  public station_id: string;
  public devices_count: string;

  constructor(
    private router: Router,
    private stationService: StationService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user") !== "\"admin\"") {
      this.router.navigateByUrl('');
  } else {
     // CKEDITOR.replace('content');
  }
  }

  addStation({form, value, valid}) {
    form.reset();
    if (valid) {
       // value.content = CKEDITOR.instances.content.getData();
        this.stationService.postAddStation(value).subscribe(res => {
            if (res == 'stationExists') {
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

                this.stationService.getStations().subscribe(stations => {
                    this.stationService.stationsBS.next(stations);
                })
            }
        });
    } else {
        console.log('Form is not valid.');
    }
}


}

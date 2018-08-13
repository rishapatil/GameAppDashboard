import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { StationService } from './../../services/station.service';

declare var CKEDITOR: any;

@Component({
  selector: 'app-admin-edit-station',
  templateUrl: './admin-edit-station.component.html',
  styleUrls: ['./admin-edit-station.component.css']
})
export class AdminEditStationComponent implements OnInit {

    station: any;
    station_id: string;
    devices_count: string;
    id: string;
    successMsg: boolean = false;
    errorMsg: boolean = false;
    errorMsg2: boolean = false;
    param: any;
    sidebar: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stationService: StationService
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
    this.stationService.getEditStation(this.param).subscribe(station => {
        this.station = station;
        this.station_id = station["station_id"];
        this.devices_count = station["devices_count"];
        this.id = station["_id"];
        
    });
});

  }

  editStation({ value, valid}) {
    if (valid) {
       // value.content = CKEDITOR.instances.content.getData();
        this.stationService.postEditStation(value).subscribe(res => {
            if (res == 'stationExists') {
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

                this.stationService.getStations().subscribe(stations => {
                    this.stationService.stationsBS.next(stations);
                });
            }
        });
    } else {
        console.log('Form is not valid.');
    }
}


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StationService } from './../../services/station.service';

@Component({
  selector: 'app-admin-stations',
  templateUrl: './admin-stations.component.html',
  styleUrls: ['./admin-stations.component.css']
})
export class AdminStationsComponent implements OnInit {

  //users: any;
  public stations: any;
  successMsg: boolean = false;
  errorMsg: boolean = false;

  constructor(
      private router: Router,
      private stationService: StationService
  ) { }

  ngOnInit() {
    
      if (localStorage.getItem("user") !== "\"admin\"") this.router.navigateByUrl('');
      //this.users = this.userService.usersBS;
  
     this.stationService.getStations().subscribe(stations => {
        this.stations = stations;
    });
  }

  deleteStation(id) {
      if (confirm('Confirm deletion')) {
          this.stationService.deleteStation(id).subscribe(res => {
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

                  this.stationService.getStations().subscribe(stations => {
                      this.stationService.stationsBS.next(stations);
                  });
              }
          });
      }
  }


}

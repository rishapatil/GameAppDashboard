import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DeviceService } from './../../services/device.service';

@Component({
  selector: 'app-admin-edit-device',
  templateUrl: './admin-edit-device.component.html',
  styleUrls: ['./admin-edit-device.component.css']
})
export class AdminEditDeviceComponent implements OnInit {

  test: any;
  device: any;
  station_id: string;
  device_id: string;
  id: string;
  successMsg: boolean = false;
  errorMsg: boolean = false;
  errorMsg2: boolean = false;
  param: any;
  sidebar: boolean = false;

constructor(
  private router: Router,
  private route: ActivatedRoute,
  private deviceService: DeviceService
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
  this.deviceService.getEditDevice(this.param).subscribe(device => {
      this.device = device;
      this.station_id = device["station_id"];
      this.device_id = device["device_id"];
      this.id = device["_id"];
      
  });
});

}

editDevice({ value, valid}) {
 // var test = JSON.stringify(value);
 // alert(test);
  if (valid) {
     // value.content = CKEDITOR.instances.content.getData();
      this.deviceService.postEditDevice(value).subscribe(res => {
          if (res == 'deviceExists') {
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

              this.deviceService.getDevices().subscribe(devices => {
                  this.deviceService.devicesBS.next(devices);
              });
          }
      });
  } else {
      console.log('Form is not valid.');
  }
}

}





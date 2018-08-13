import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DeviceService } from './../../services/device.service';

@Component({
  selector: 'app-admin-add-device',
  templateUrl: './admin-add-device.component.html',
  styleUrls: ['./admin-add-device.component.css']
})
export class AdminAddDeviceComponent implements OnInit {

  public successMsg: boolean = false;
  public errorMsg: boolean = false;
  public device_id: string;
  public station_id: string;

  constructor(
    private router: Router,
    private deviceService: DeviceService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user") !== "\"admin\"") {
      this.router.navigateByUrl('');
  } else {
     // CKEDITOR.replace('content');
  }
  }

  addDevice({form, value, valid}) {
    form.reset();
    if (valid) {
       // value.content = CKEDITOR.instances.content.getData();
        this.deviceService.postAddDevice(value).subscribe(res => {
            if (res == 'deviceExists') {
                this.errorMsg = true;
                setTimeout(function() {
                    this.errorMsg = false;
                }.bind(this),2000);
            } else {
                this.successMsg = true;
                setTimeout(function() {
                    this.successMsg = false;
                }.bind(this),2000);

                this.deviceService.getDevices().subscribe(devices => {
                    this.deviceService.devicesBS.next(devices);
                })
            }
        });
    } else {
        console.log('Form is not valid.');
    }
}

}

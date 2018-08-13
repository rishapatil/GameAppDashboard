import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DeviceService } from './../../services/device.service';


@Component({
  selector: 'app-admin-devices',
  templateUrl: './admin-devices.component.html',
  styleUrls: ['./admin-devices.component.css']
})
export class AdminDevicesComponent implements OnInit {

 //users: any;
 public devices: any;
 successMsg: boolean = false;
 errorMsg: boolean = false;

 constructor(
     private router: Router,
     private deviceService: DeviceService
 ) { }

 ngOnInit() {
   
     if (localStorage.getItem("user") !== "\"admin\"") this.router.navigateByUrl('');
     //this.users = this.userService.usersBS;
 
    this.deviceService.getDevices().subscribe(devices => {
       this.devices = devices;
   });
 }

 deleteDevice(id) {
     if (confirm('Confirm deletion')) {
         this.deviceService.deleteDevice(id).subscribe(res => {
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

                 this.deviceService.getDevices().subscribe(devices => {
                     this.deviceService.devicesBS.next(devices);
                 });
             }
         });
     }
 }


}

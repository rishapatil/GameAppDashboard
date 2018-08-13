import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SidebarService } from './../../services/sidebar.service';

declare var CKEDITOR: any;

@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
    styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

    content: string;
    successMsg: boolean = false;

    constructor(
        private router: Router,
        private sidebarService: SidebarService
    ) { }

    ngOnInit() {

        if (localStorage.getItem("user") !== "\"admin\"") {
            this.router.navigateByUrl('');
        } else {
            CKEDITOR.replace('content');
        }

        this.sidebarService.getSidebar().subscribe(res => {
            this.content = res.content;
        });

    }

    editSidebar({ value }) {
        value.content = CKEDITOR.instances.content.getData();

        this.sidebarService.postSidebar(value).subscribe(res => {
            this.successMsg = true;
            setTimeout(function () {
                this.successMsg = false;
            }.bind(this), 2000);
        });
    }

}

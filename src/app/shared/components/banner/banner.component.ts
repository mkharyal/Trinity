import { Component, OnInit } from '@angular/core';
import { RufDynamicMenubarItem } from '@ruf/shell';
import { Router } from '@angular/router';

@Component({
	selector: 'ip-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
	paths: RufDynamicMenubarItem[];
	items: RufDynamicMenubarItem[] = [];
	isAuthenticated = false;
	demoSelectedPath: string;
	constructor(private route: Router) {
	}

	goNavigate(data, param) {
		if (data === 'login') {
			this.route.navigate([data], { queryParams: { logout: param } })
		} else {
			this.route.navigate([data]);
		}
	}

	navigate() {
		this.route.navigate(["_singOutInProcess"]);
	}

	ngOnInit() {
		this.items = [

			{
				label: 'Settings',
				path: 'item1',
				icon: 'fis-icon-settings',
				children: [
					{
						label: 'User Profile',
						path: '/userprofile'
					},
					{
						label: 'Change Password',
						path: '/changepassword'
					}
					,
					{
						label: 'Customize',
						path: 'item1/child2'
					}
				]
			},
			{
				label: 'Help',
				path: 'item2',
				icon: 'fis-icon-help',
				children: [
					{
						label: 'Contact us',
						path: 'item2/child1'
					},
					{
						label: 'Mon-Fri 8:00 AM - 6:00 PM EST',
						path: 'item2/child2'
					},
					{
						label: ' 866-216-2432, Option 2',
						path: 'item2/child3'
					},
					{
						label: 'email@fisglobal.com',
						path: 'item2/child4'
					}
				]
			}
		];
	}
}

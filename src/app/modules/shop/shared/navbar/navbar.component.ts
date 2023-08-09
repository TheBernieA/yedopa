import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  NAVLINKS: any = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Shop',
      route: '#',
      subLinks: [
        {
          header: 'Auto Body Parts',
          subLabels: [
            {
              label: 'Car Covers',
              route: '',
            },
          ],
        },
      ],
    },
    {
      label: 'Contact Us',
      route: '/',
    },
  ];
}

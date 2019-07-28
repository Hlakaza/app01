import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app01';

  cartNumber = 55;

  nav = [
    { name: 'Home', link: '', },
    { name: 'Shop Brands', link: '', },
    { name: 'Shop Brands', link: '', },
  ];

  footerav = {
       headers: {
         header1: 'Shop Top Brands',
         header2: 'Skin Shop'
       },
       topBrands: [
         { name: 'Shop Brands', link: '', },
         { name: 'Shop Brands', link: '', },
        ],
        skinShop: [
         { name: 'Shop Brands', link: '', },
         { name: 'Shop Brands', link: '', },
        ],
  };


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.scss'],
})
export class ProductTypesComponent {
  CATEGORY_DATA: any = [
    {
      header_1: 'abs',
      header_2: 'transmission',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quisquam.',
      image: '../../../../../../../assets/images/shop/autoPNG/abs+trans.png',
      background: 'black',
      color:'white'
    },
    {
      header_1: 'Scanning',
      header_2: 'Tools',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quisquam.',
      image: '../../../../../../../assets/images/shop/autoPNG/scan-tool.png',
      background: 'white',
      color:'black'
    },
    {
      header_1: 'system',
      header_2: 'system',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quisquam.',
      image: '../../../../../../../assets/images/shop/autoPNG/abs+trans.png',
      background: 'white',
      color:'black'
    },
    {
      header_1: 'system',
      header_2: 'system',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quisquam.',
      image: '../../../../../../../assets/images/shop/autoPNG/abs+trans.png',
      background: 'black',
      color:'white'
    },
  ];
}

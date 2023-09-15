import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: { id: number; name: string; price: number; imgURL: string }[] = [
    {
      id: 1,
      name: 'donutspink',
      price: 100,
      imgURL:"assets/images/photo-1626094309830-abbb0c99da4a.jfif"},
    {
      id: 2,
      name: 'donutschocalte',
      price: 120,
      imgURL:
        "assets/images/stas-ovsky-123540-600x500.jpg",
    },
    {
      id: 3,
      name: 'dountsColor',
      price: 99,
      imgURL: "assets/images/baked_donut_recipe_featured.jpeg"
      },
    {
      id: 4,
      name: 'clem',
      price: 60,
      imgURL:
        "assets/images/clem-onojeghuo-206832-600x500.jpg",
    },
    {
      id: 5,
      name: 'DonutsYummy',
      price: 250,
      imgURL:
        'assets/images/61v9jq-TC1L._AC_UF1000,1000_QL80_.jpg',
    },
  ];
}

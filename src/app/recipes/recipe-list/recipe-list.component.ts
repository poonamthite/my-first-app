import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'this is simply a test', 'https://whatsinthepan.com/wp-content/uploads/2018/11/Pesto-Shrimp-Fettuccine-8.jpg'),
    new Recipe('A Test recipe', 'this is simply a test', 'https://whatsinthepan.com/wp-content/uploads/2018/11/Pesto-Shrimp-Fettuccine-8.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

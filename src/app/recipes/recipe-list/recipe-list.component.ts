import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First test recipe', 'this is the first test recipe', 
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?resize=960,872?quality=90&webp=true&resize=375,341'),
    new Recipe('Second test recipe', 'this is the second test', 
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?resize=960,872?quality=90&webp=true&resize=375,341')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

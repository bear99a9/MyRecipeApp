import { Injectable, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredients.model';
import { Recipe } from "../shared/models/recipe.model";

@Injectable({ providedIn: 'root' })

export class RecipeService implements OnInit {
    constructor() { }

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    ngOnInit() {

    }

    getRecipes() {
        return this.recipes.slice(); // by calling slice creates a copy of the array so you can't access/ modify the actual array in the service
    }

    getRecipe(id: number){
        return this.recipes[id];
    }


    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
    }

    updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
    }
}
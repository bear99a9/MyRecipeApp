import { Injectable, OnInit } from "@angular/core";
import { Recipe } from "../shared/models/recipe.model";

@Injectable({ providedIn: 'root' })

export class RecipeService implements OnInit {

    constructor() { }

    private recipes: Recipe[] = [
        new Recipe('First test recipe', 'this is the first test recipe',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?resize=960,872?quality=90&webp=true&resize=375,341'),
        new Recipe('Second test recipe', 'this is the second test',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?resize=960,872?quality=90&webp=true&resize=375,341')
    ];

    ngOnInit() {

    }

    getRecipes(){
        return this.recipes.slice(); // by calling slice creates a copy of the array so you can't access/ modify the actual array in the service
    }
}
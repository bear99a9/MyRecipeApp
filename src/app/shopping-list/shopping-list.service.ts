import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Ingredient } from "../shared/models/ingredients.model";

@Injectable({ providedIn: 'root' })

export class ShoppingListService implements OnInit {
    
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Pasta', 1)
    ];

    constructor() { }

    ngOnInit() {

    }

    getIngredients(){
        return this.ingredients.slice();
    }

    AddIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    AddIngredients(newIngredients: Ingredient[]){
        this.ingredients.push(...newIngredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }


}
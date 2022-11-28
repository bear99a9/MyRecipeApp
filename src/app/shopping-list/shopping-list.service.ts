import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from '../shared/models/ingredients.model';

@Injectable({ providedIn: 'root' })

export class ShoppingListService implements OnInit {

    public ingredientsChanged = new Subject<Ingredient[]>();
    public startedEditing = new Subject<number>();
    public ingredients: Ingredient[] = [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Pasta', 1)
    ];

    constructor() { }

    ngOnInit() {

    }

    getIngredients() {
        return this.ingredients.slice();
    }

    AddIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.changeIngredients()
    }

    AddIngredients(newIngredients: Ingredient[]) {
        this.ingredients.push(...newIngredients);
        this.changeIngredients()
    }

    getIngredientByIndex = (index: number) => this.ingredients[index];

    updateIngredient(index: number, editedIngredient: Ingredient) {
        this.ingredients[index] = editedIngredient;
        this.changeIngredients()
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.changeIngredients()
    }

    changeIngredients = () => this.ingredientsChanged.next(this.ingredients.slice());


}
import { Ingredient } from "./ingredients.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath : string;
    public ingredients : Ingredient[]

    constructor(name: string, description: string, imaginePath: string, ingredients: Ingredient[]){
        this.name = name,
        this.description = description,
        this.imagePath = imaginePath,
        this.ingredients = ingredients
    }
}
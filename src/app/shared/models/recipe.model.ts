export class Recipe {
    public name: string;
    public description: string;
    public imagePath : string;

    constructor(name: string, description: string, imaginePath: string){
        this.name = name,
        this.description = description,
        this.imagePath = imaginePath
    }
}
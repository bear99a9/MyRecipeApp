import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  private recipesChangedSub: Subscription;

  recipes: Recipe[];
  
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

    this.recipeService.recipesChanged.subscribe({
      next: (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    })
  }

  ngOnDestroy(): void {
    this.recipesChangedSub.unsubscribe();
  }


  onNewRecipe(){
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}

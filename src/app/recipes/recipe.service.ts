import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[]=[
        new Recipe('Super whopper',
        'This is simply a test','https://www.df.cl/noticias/site/artic/20190516/imag/foto_0000000320190516183415.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Double western bacon',
        'This is simply a test 2',
        'https://www.carlsjr.es/main-files/uploads/2017/11/doble_wester_bacon_cheeseburguer.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
      ];

    constructor(private slService:ShoppingListService){}
    
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[]= [
        new Ingredient('Apples', 12),
        new Ingredient('Orange', 10)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients) 
      }

      addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}
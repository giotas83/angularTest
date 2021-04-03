import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/shared/classes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter();

  public recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'utilizzato come test', 'assets/images/dcs-image-black.jpg'),
    new Recipe('A Test Recipe 2 ', 'utilizzato come test 2', 'assets/images/dcs-image-black.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  public onRecipeSelected(recipeSelected: Recipe) {
    this.recipeWasSelected.emit(recipeSelected);
  }

}

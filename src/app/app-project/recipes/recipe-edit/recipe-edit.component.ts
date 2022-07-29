import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/shared/classes';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean;

  recipeForm: UntypedFormGroup;
  get ingredientsControls() {
    return (<UntypedFormArray>this.recipeForm.get('ingredients')).controls;
  }

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe( (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null; // può arriv 0
        this.initForm();
      });
  }

  private initForm() {
    let recipeName: string = '';
    let recipeImagePath: string = '';
    let recipeDescription: string = '';
    let recipeIngredients: UntypedFormArray = new UntypedFormArray([]);

    if(this.editMode) {
      const recipe: Recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (let ingr of recipe.ingredients) {
          recipeIngredients.push(
            new UntypedFormGroup({
              'name': new UntypedFormControl(ingr.name, Validators.required),
              'amount': new UntypedFormControl(ingr.amounth, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new UntypedFormGroup({
      'name': new UntypedFormControl(recipeName, Validators.required),
      'imagePath': new UntypedFormControl(recipeImagePath, Validators.required),
      'description': new UntypedFormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  public onAddIngredient(): void {
    (<UntypedFormArray>this.recipeForm.get('ingredients')).push(
      new UntypedFormGroup({
        'name': new UntypedFormControl(null, Validators.required),
        'amount': new UntypedFormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  public onSubmit() {
    console.log(this.recipeForm);
   /*  const newRecipe: Recipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
      ); */
    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as UntypedFormArray).removeAt(index);
  }

}

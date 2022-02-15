import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/shared/classes';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef<HTMLInputElement>; // true se voglio vederlo già nell ngOnInit
  // @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef<HTMLInputElement>; // true se voglio vederlo già nell ngOnInit

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  public onAddItem(form: NgForm) {
    // const ingredient = new Ingredient(this.nameInputRef.nativeElement.value, +this.amountInputRef.nativeElement.value);
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    this.shoppingListService.addIngredient(ingredient);
  }

}

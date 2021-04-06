import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/shared/classes';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef<HTMLInputElement>; // true se voglio vederlo già nell ngOnInit
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef<HTMLInputElement>; // true se voglio vederlo già nell ngOnInit

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  public onAddItem() {
    const ingredient = new Ingredient(this.nameInputRef.nativeElement.value, +this.amountInputRef.nativeElement.value);
    this.shoppingListService.addIngredient(ingredient);
  }

}

import { Component, inject, Input } from '@angular/core';
import { CountService } from '../count.service';
import { ShoppingList } from '../shopping-list';
// import { ShoppingListByIdService } from '../shopping-list-by-id.service';
import { ShoppingListService } from '../shopping-list.service';
import { StateToggleService } from '../state-toggle.service';
// import { onClick } from '../app.component'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  @Input() shopping!: ShoppingList;

  shoppingListById: ShoppingList | undefined
  shoppingListService: ShoppingListService = inject(ShoppingListService)

  

  constructor(
    public countService:CountService,
    public toggleService:StateToggleService,
    // public shoppingListIdService:ShoppingListByIdService
    ){
      this.shoppingListById = this.shoppingListService.getShoppingListById(2)
  }
  // count:number = 0
  clickedButtonId:number = -1

  

  // public onAddNew(indexId:number){
  //   this.shoppingListIdService.addById(index)
  // }

  onClick(index:number):void{
    console.log(index)
    this.clickedButtonId = index
    this.countService.increasementCount(index)
  }

  // combinedFunction(index:number){
  //   this.onAddNew(index)
  //   this.onClick(index)
  // }


  onCountInc(index:number){
    // this.count++
    this.countService.increasementCount(index)
  }
  onCountDec(index:number){
    if(this.countService.counts[this.shopping.id].value > 0){
      this.countService.decreasementCount(index)
    }
  }
  onResetCount(index:number){
    this.countService.resetCount(index)
  }




  // @Input() onClick()
}

import { Component,inject } from '@angular/core';
import { ShoppingList } from './shopping-list';
import { ShoppingListService } from './shopping-list.service';
import { Injectable } from '@angular/core';
import { StateToggleService } from './state-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class AppComponent {

  title = 'demo-app';
  shoppingList:ShoppingList[] = []
  shoppingListService: ShoppingListService = inject(ShoppingListService)
  

  // state:boolean = false

  // public onClick() {
  //   this.state = !this.state
  // }

  constructor(public statetoggle:StateToggleService){
    this.shoppingList = this.shoppingListService.getAllShoppingList()
  }
  
  // state:boolean = this.statetoggle.state;
  // console: any.log(state:boolean)

  toggleClick(){
    this.statetoggle.onClick()
  }
}

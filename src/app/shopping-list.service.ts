import { Injectable } from '@angular/core';
import { ShoppingList } from './shopping-list';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }
  shoppingList : ShoppingList[] = [
    {
      id: 1,
      name: "Sar Oak",
      price: "3000",
      photo: "./assets/book.jpg"
    },
    {
      id: 2,
      name: "Dar Shay",
      price: "32000",
      photo: "./assets/katana.jpg"
    },
    {
      id: 3,
      name: "Tan Dote",
      price: "6600",
      photo: "./assets/iron.jpg"
    },
    {
      id: 4,
      name: "Dat Bu",
      price: "13000",
      photo: "./assets/datbu.jpg"
    },
    {
      id: 5,
      name: "Pan kar",
      price: "43000",
      photo: "./assets/fan.jpg"
    },
  ]

  getAllShoppingList():ShoppingList[] {
    return this.shoppingList;
  }

  getShoppingListById(id:number):ShoppingList | undefined {
    return this.shoppingList.find(shoppingList => shoppingList.id == id)
    
  }

}

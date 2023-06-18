import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateToggleService {

  public state:boolean = false

  public onClick():void{
    this.state = !this.state
  }

  constructor() { }
}

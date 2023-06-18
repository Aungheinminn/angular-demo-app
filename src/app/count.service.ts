import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  public counts: {value: number}[] = [
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 }
  ]; 

  public increasementCount(index:number): void{
    this.counts[index].value++
  }
  public decreasementCount(index:number):void {
    // if(this.counts[index] > 0){
      this.counts[index].value--
    // }
    
  }
  public resetCount(index:number):void {
    this.counts[index].value = 0
  }
  constructor() { }
}

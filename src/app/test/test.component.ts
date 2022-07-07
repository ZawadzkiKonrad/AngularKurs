import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title = 'Angulara';
  dogName = 'Mela';
  days = ['Poniedzialek', 'Wtorek', 'Sroda', 'Czwartek', 'Piatek', 'Sobota', 'Niedziela'];
  dogs = new Array<Dog>();


  constructor() {
    this.dogs.push(new Dog('Mela', 12), new Dog('Reksio', 2), new Dog('alex', 4));
  }

  ngOnInit(): void {
  }

  addDogs() {
    this.dogs.push(new Dog('Mela', 12), new Dog('Reksio', 2), new Dog('alex', 4));
  };
  removeDogs() {
    this.dogs = [];
  }

  isVisible = true;
  isHidden = false;
  show() {
    this.isVisible = !this.isVisible;
  }
  hidden() {
    this.isHidden = !this.isHidden;
  }

  inputText = 'Pole txt';
  inputText2Way = '';
  button = true;
  showClick = '';

  click() {
    this.showClick = 'Przycisk aktywny';
    this.button = false;
  }



}
class Dog {

  constructor(public name: string, public age: number) {
  }

}
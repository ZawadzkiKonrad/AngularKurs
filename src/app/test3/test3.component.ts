import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  tasksImport=[1,2,3,4,5]                               /* lista do przekazania podrzednemu komponentowi poprzezn @Input */

  newTask = "";
  tasksList = new Array<string>();
  doneList = new Array<string>();
  add() {
    this.tasksList.push(this.newTask);
    console.log(this.tasksList);
    this.newTask = '';
  };

  remove(task: string, index: number) {
    //this.tasksList=this.tasksList.filter((e,i)=>e !==task||i!==index);    //INNE USUWANIE, task w parametrach niepotrzbeny
    //this.tasksList=this.tasksList.filter(i=>i.id !=index);
    this.tasksList.splice(index,1);
    console.log(this.tasksList);
    /* const index2 = this.tasksList.indexOf(task, 0);
    if (index2 > -1) {
      this.tasksList.splice(index2, 1);
    }
    */

  };

  done(task: string, index: number) {
    this.doneList.push(task);
    this.remove(task, index);
  };

  selected(task:number)
  {
    console.log(task);
  }





}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() tasks=[1,2];
  @Output() eventTask= new EventEmitter<number>();

  constructor() {

  }

  ngOnInit() {
  }

  select(task: number){                                        /* metoda do ktorej przekazuje task (z tablicy numerow) z komponentu"dziecka" i uzwyam w rodzicu */
    this.eventTask.emit(task);
  }

}

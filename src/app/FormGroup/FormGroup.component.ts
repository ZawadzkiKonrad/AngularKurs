import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-FormGroup',
  templateUrl: './FormGroup.component.html',
  styleUrls: ['./FormGroup.component.css']
})
export class FormGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    first: new FormControl('Nancy', Validators.minLength(2)),
    last: new FormControl('Drew'),
  });
  get first(): any { return this.form.get('first'); }
  get last(): any { return this.form.get('last'); }

  clearInputMethod1() { this.first.reset(); this.last.reset(); }

  clearInputMethod2() { this.form.setValue({first: '', last: ''}); }

  setValue() {
    this.form.setValue({first: 'Nancy', last: 'Drew'});
    this.inputText2='';
   }


  inputText2='';
  inputText3='elo';

  onPaste(event: Event){
    event.preventDefault()
    this.inputText2='Nie wklejaj tylko napisz!!';

    setTimeout(()=>
    {
      this.inputText2='';
      this.first.reset();                                         //po 3 sekundach tekst znow bedzie pusty i value inputu tez
    },3000);


  }

}

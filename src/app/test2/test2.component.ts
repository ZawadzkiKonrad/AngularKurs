import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  inputText2 = '';
  maxLength = 5;
  colorClass = 'color';
  lgoUrl = '';
  toggle=true;
  inputText3='tu wpisz nazwe';

  isDisable=true;

  constructor() {                              //ustawianie opiznienia o 3 sekundy, o tym czasie disable zmienia sie na false(a przycisk odblokwuje)
    setTimeout(()=>
    {
      this.isDisable=false;
    },3000);
  }

  change(){

   this.toggle= !this.toggle;                 //jesli chce przelaczac pomiedzy dwoma stanami, musze uzyc flagi bool a nie zwyklego if!!

   if (this.toggle) {
    this.colorClass='color';
    this.lgoUrl='';
    this.inputText2='';
    this.maxLength=5;
   }
   else{
    this.colorClass='color2';
    this.lgoUrl='http://angular.io/assets/images/logos/angular/angular.png';
    this.inputText2='Text input';
    this.maxLength=10;
   }
  }


  onClick(event:Event){
    console.log(event);
  }


 onFocus(){
    this.colorClass='color2';
  }
  onMouseMove(event:MouseEvent){
    console.log('X: '+ event.clientX+', Y: '+
    event.clientY);
  }

  change2(){
    //this.isDisable=false;
    this.inputText3='lalala';
  }

  onPaste(){
    this.inputText2='Nie wklejaj tylko napisz!!';
    this.inputText3='';
    //var input= document.getElementById("input");

    //input=null;

  }
  ngOnInit() {
  }

}

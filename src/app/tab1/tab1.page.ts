import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
/*
*-Initialisation des varariables *
*/d=0;
  display = 0;
  memory = 0;
  state = 'number';
  operator = '+';
  decimal = false;
  decimals = 0;
/* *
*la function clickNumber qui prends en paramettre un nombre *
*/
  clickNumber(n: number) {
    switch (this.state) {
      /*
      *Pour chaque nombre : on vérifie si c'est un nombre decimal .
      *Si oui on incrémente decimals et on retourne display + le nombre * la puissance 
      dont la base est 10 et l'expoant est le décimal incrémété.   
      *Sinon on retourne display * 10 +le nombre   
       */ 
      case 'number':
        if (this.decimal) { 
          this.decimals++;
          this.display = this.display + n * Math.pow(10, -this.decimals);
        } else {
          this.display = this.display * 10 + n;
        }
        break;
        /*
        pour les operateur ,display prend le nombre
        */
      case 'operator':
        this.display = n;
        this.state = 'number';
        break;

      case 'result':
        this.memory = 0;
        this.display = n;
        this.state = 'number';
    }
  }

  clickOperator(o: string) {
    // console.log('clickOperator inicio');
    this.calculate();
    this.operator = o;
    this.memory = this.display;
    this.state = 'operator';
    // console.log('clickOperator fin');
  }

  calculate() {
    // tslint:disable-next-line:no-eval
    // console.log('calculate inicio');
    // console.log('' + '' + this.memory + this.operator + '(' + this.display + ')');
    this.display = eval('' + this.memory + this.operator + '(' + this.display + ')');
    this.memory = 0;
    this.state = 'result';
    this.operator = '+';
    this.decimal = false;
    this.decimals = 0;
    // console.log('calculate fin');
  }

  resetLastNumber() {
    this.display = 0;
    this.state = 'number';
    this.decimal = false;
    this.decimals = 0;
  }
//reinitialisation des variables
  reset() {
    this.display = 0;
    this.memory = 0;
    this.state = 'number';
    this.operator = '+';
    this.decimal = false;
    this.decimals = 0;
  }
// signe contraire de display
  changeSign() {
    this.display = this.display * -1;
  }
  /* modulo(){
     this.d =  this.memory % this.display;
     this.display = this.d;
   }*/
  setDecimal() {
    this.decimal = true;
  }
}

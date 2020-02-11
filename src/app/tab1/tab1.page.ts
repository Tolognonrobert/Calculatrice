import { Component } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 /* declaration des varariables */
   display = '0'; 
   oldValue = '0';
   lastOperator = 'x'; 
   newEntry = true; 
   Matrice = [
    [ 'AC'  , '+/-' ,  '%' ,  '÷' ] ,
    [ 7  ,  8  ,  9  ,  'x' ] ,
    [ 4  ,  5  ,  6  ,  '-' ] ,
    [ 1  ,  2  ,  3  ,  '+' ] ,
    [ 0  ,  'DEL'  , '.' ,  '=' ,  ] ,

  ] ;

  fonctionCalculatrice(symbole) {
   if (isNumber(symbole)) {
        if (this.newEntry) {
          this.display = '' + symbole;
        } else {
          this.display += '' + symbole;
        }
        this.newEntry = false;
    } else if (symbole === '+/-') {
        this.display = '' + (parseFloat(this.display ) * -1);
        this.newEntry = false;
    } else if (symbole === ',') {
      this.display = '' + parseFloat(this.display ) + '.';
      this.newEntry = false;
  } else if (symbole === 'AC') {
        this.display = '0';	
        this.newEntry = true;
    } else if (symbole === '=') {
        if (this.lastOperator === 'x') { 
          this.display = '' + (parseFloat(this.oldValue) * parseFloat(this.display ));
         }  else if (this.lastOperator === '-') {
          this.display = '' + (parseFloat(this.oldValue) - parseFloat(this.display));
         } else if (this.lastOperator === '/') {
          this.display = '' + (parseFloat(this.oldValue) / parseFloat(this.display));
         } else if (this.lastOperator === '+') {
          this.display = '' + (parseFloat(this.oldValue) + parseFloat(this.display));
         } else if (this.lastOperator === '%') {
          this.display = '' + (parseFloat(this.oldValue) % parseFloat(this.display));
         }
        this.newEntry = true;
    } else { // operateur
        this.newEntry = true;
        this.oldValue = this.display;
        this.lastOperator = symbole;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txtIng = 'Ingrese su código';
  imgSuperior = '../assets/images/logo-superior.png';
  imgSalticas = '../assets/images/products-superior.png';

  newWindow() {
    window.open('about:blank', '_self');
  }
  
}

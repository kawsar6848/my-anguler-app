import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadNavigate= 'recipe';
   onNavigate(feature: string){
    this.loadNavigate= feature;
   }


  title = 'my-anguler-app';
}

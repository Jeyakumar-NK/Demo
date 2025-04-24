import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularComponent } from './Angular/angular/angular.component';
import { JavascriptComponent } from './Javascript/javascript/javascript.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AngularComponent,JavascriptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DependencyInjection';
}

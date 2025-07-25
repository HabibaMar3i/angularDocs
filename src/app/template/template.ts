import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-template',
  imports: [],
  templateUrl: './template.html',
  styleUrl: './template.css'
})
export class Template {
  // Using a normal property
  userName = 'Habiba1';
  // Using a signal
  userName2 = signal('Habiba2');

  constructor() {
    this.userName2.set('Habiba3'); // Update the signal value (must be inside a constructor or method)
  }
}

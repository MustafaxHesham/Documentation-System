import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-component',
  template: `
    <p class="display-3 mt-5 text-center">
      Welcome in our Documentation System
    </p>
  `,
  styles: [
  ]
})
export class WelcomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';


@Component({
    selector: 'demo-app',
    template: `
        <h1>{{title}}</h1>
    `
})
export class AppComponent {
    title: string = "working IT Calculation";
}
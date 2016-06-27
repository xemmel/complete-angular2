import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'


@Component({
    selector: 'demo-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['/home']">Home</a>
            <a [routerLink]="['/add']">Add</a>
        </nav>
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {
    title: string = "working IT Calculation";
}
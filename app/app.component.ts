import { Component } from '@angular/core';
import { BookService } from './gists/gist.service';
import { BooksComponent } from './gists/gist.component';
import { EditBookComponent } from './gists/edit-gist.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { WelcomePageComponent } from './welcome-page.component';
import { ContactComponent } from './contact.component';
import 'rxjs/Rx';
import { HTTP_PROVIDERS } from '@angular/http';


@Component({
    selector: 'my-app',

    template: `
    <h1>{{title}}</h1>
    <nav>
    <a [routerLink]="['WelcomePage']">Strona Główna</a>
    <a [routerLink]="['Books']">Pokaż Wszystkie</a>
    <a [routerLink]="['EditBook']">Dodaj/Usuń/Edytuj</a>
    <a [routerLink]="['Contact']">Kontakt</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
    `,

    directives: [ROUTER_DIRECTIVES, WelcomePageComponent],
    providers: [
        ROUTER_PROVIDERS,
        BookService
    ]
})

    @RouteConfig([
    {        path: '/gists',        name: 'Books',        component: BooksComponent    },
    {        path: '/welcome-page',        name: 'WelcomePage',        component: WelcomePageComponent,
        useAsDefault: true    },
    {        path: '/edit-gist',        name: 'EditBook',        component: EditBookComponent    },
    {        path: '/contact',        name: 'Contact',        component: ContactComponent    }
    ])

export class AppComponent {
    title = 'Spis wydatków na samochód';
}

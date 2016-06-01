import { Component } from '@angular/core';
import { GistService } from './gists/gist.service';
import { GistComponent } from './gists/gist.component';
import { EditGistComponent } from './gists/edit-gist.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { WelcomePageComponent } from './welcome-page.component';
import { ContactComponent } from './contact.component';
import 'rxjs/Rx';
import { HTTP_PROVIDERS } from '@angular/http';


@Component({
    selector: 'my-app',

    template: `
    <h1>{{title}}</h1>
<nav id="horz"> 
    <a [routerLink]="['WelcomePage']">Strona Główna</a>
    <a [routerLink]="['Gists']">Pokaż Wszystkie</a>
    <a [routerLink]="['EditGist']">Dodaj/Usuń/Edytuj</a>
    <a [routerLink]="['Contact']">Kontakt</a> 
</nav>

    <hr>
    <router-outlet></router-outlet>
    `,

    directives: [ROUTER_DIRECTIVES, WelcomePageComponent],
    providers: [
        ROUTER_PROVIDERS,
        GistService
    ]
})

    @RouteConfig([
    {        path: '/books',                name: 'Gists',              component: GistComponent    },
    {        path: '/welcome-page',         name: 'WelcomePage',        component: WelcomePageComponent,    useAsDefault: true    },
    {        path: '/edit-gist',            name: 'EditGist',           component: EditGistComponent    },
    {        path: '/contact',              name: 'Contact',            component: ContactComponent    }
    ])  

export class AppComponent {
    title = 'Spis wydatków na samochód';
}

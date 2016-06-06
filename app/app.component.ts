import { Component } from '@angular/core';
import { GistService } from './gists/gist.service';
import { GistComponent } from './gists/gist.component';
import { GistDetailComponent } from './gists/gist-detail.component';
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
    <a [routerLink]="['WelcomePage']">O projekcie</a>
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
    {        path: '/gists',                name: 'Gists',              component: GistComponent, useAsDefault: true    }, 
    {        path: '/welcome-page',         name: 'WelcomePage',        component: WelcomePageComponent        },
    {        path: '/edit-gist',            name: 'EditGist',           component: EditGistComponent    },
    {        path: '/contact',              name: 'Contact',            component: ContactComponent    },
    {       path:  '/detail/:id',           name: 'GistDetail',         component: GistDetailComponent }
    ])  

export class AppComponent {
    title = '[BiU]-Angular2';
}

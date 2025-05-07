import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        HeaderComponent,
        MainNavComponent,
        FooterComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'my-angular-tp';
}

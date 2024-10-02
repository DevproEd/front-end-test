import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { testModel } from './shared/app.model';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'front-end-test';
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.title = 'front-end-pre-commit-test';
    }
}

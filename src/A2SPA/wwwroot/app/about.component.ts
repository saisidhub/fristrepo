import { Component } from '@angular/core';

@Component({
    selector: 'my-about',
    templateUrl: '/partial/aboutComponent'
})

export class AboutComponent {
    private name: string = "Hello World";
    private rollno: number = 1001;
}

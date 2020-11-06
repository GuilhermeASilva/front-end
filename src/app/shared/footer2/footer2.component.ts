import { Component, HostBinding } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'footer-cmp2',
    templateUrl: 'footer2.component.html'
})

export class FooterComponent2{
    test : Date = new Date();
}

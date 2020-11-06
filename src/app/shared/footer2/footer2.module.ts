import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent2 } from './footer2.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ FooterComponent2 ],
    exports: [ FooterComponent2 ]
})

export class FooterModule2 {}

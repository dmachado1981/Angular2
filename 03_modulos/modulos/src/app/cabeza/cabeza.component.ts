import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cabeza',
    template: `
    <header>
        <h1> Bienvenidos al curso {{curso}}! </h1>
    </header>`
    })

export  class CabezaComponent implements OnInit {
    curso: string;

    constructor() { }

    ngOnInit() {
        this.curso = 'Angular 4.x';
    }
}

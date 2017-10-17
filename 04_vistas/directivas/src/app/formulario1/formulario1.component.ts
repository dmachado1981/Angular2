import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {
  sIdea: string;
  aIdeas: Array <string>;

  sName: string;
  constructor() { }

  ngOnInit() {
    this.sIdea = '';
    this.aIdeas = [];

  }

  btnInsert (oEv) {
    this.aIdeas.push(this.sIdea);
    this.sIdea = '';
  }

  btnDelete() {
    this.aIdeas = [];
  }
}

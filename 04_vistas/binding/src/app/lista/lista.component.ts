import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  aNames: string[];
  constructor() { }

  ngOnInit() {
    this.aNames = ['Pepe', 'Rosa', 'Maria', 'Luis'];
  }



}

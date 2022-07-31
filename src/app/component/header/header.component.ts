import { PorfolioService } from './../../servicios/portfolio.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  miPortfolio: any;

  constructor(private datosPortfolio: PorfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log('Datos personales' + JSON.stringify(data));
      this.miPortfolio = data[0];
    });
  }
}

import { Potencias, PotenciaService } from 'src/app/servicios/potencia.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-potencias',
  templateUrl: './potencias.component.html',
  styleUrls: ['./potencias.component.css'],
})
export class PotenciasComponent implements OnInit {
  public lasPotencias: Potencias[] = [];
  public editarPotencia: Potencias | undefined;
  public deletePotencia: Potencias | undefined;

  constructor(private potenciaService: PotenciaService) {}

  ngOnInit(): void {
    this.getPotencia();
  }

  public getPotencia(): void {
    this.potenciaService.getPotencia().subscribe({
      next: (Response: Potencias[]) => {
        this.lasPotencias = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  // Implementacion Modal
  public onOpenModal(mode: string, potencias?: Potencias): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPotenciaModal');
    } else if (mode === 'delete') {
      this.deletePotencia = potencias;
      button.setAttribute('data-target', '#deletePotenciaModal');
    } else if (mode === 'edit') {
      this.editarPotencia = potencias;
      button.setAttribute('data-target', '#editarPotenciaModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddPotencia(addForm: NgForm): void {
    document.getElementById('add-potencia-form')?.click();
    this.potenciaService.addPotencia(addForm.value).subscribe({
      next: (response: Potencias) => {
        console.log(response);
        this.getPotencia();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }
  public onUpdatePotencia(potencias: Potencias) {
    this.editarPotencia = potencias;
    document.getElementById('add-potencia-form')?.click();
    this.potenciaService.editarPotencia(potencias).subscribe({
      next: (response: Potencias) => {
        console.log(response);
        this.getPotencia();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  public onDeletePotencia(idPot: number): void {
    this.potenciaService.deletePotencia(idPot).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getPotencia();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}

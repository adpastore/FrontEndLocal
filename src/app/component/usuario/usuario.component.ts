import { Usuario, UsuarioService } from 'src/app/servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  public usuarios: Usuario[] = [];
  public editarUsuario: Usuario | undefined;
  public deleteUsuario: Usuario | undefined;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuario();
  }
  public getUsuario(): void {
    this.usuarioService.getUsuario().subscribe({
      next: (response: Usuario[]) => {
        this.usuarios = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  // Implementacion Modal
  public onOpenModal(mode: string, usuarios?: Usuario): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUsuarioModal');
    } else if (mode === 'delete') {
      this.deleteUsuario = usuarios;
      button.setAttribute('data-target', '#deleteUsuarioModal');
    } else if (mode === 'edit') {
      this.editarUsuario = usuarios;
      button.setAttribute('data-target', '#editarUsuarioModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddUsuario(addForm: NgForm): void {
    document.getElementById('add-usuario-form')?.click();
    this.usuarioService.addUsuario(addForm.value).subscribe({
      next: (response: Usuario) => {
        console.log(response);
        this.getUsuario();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }
  public onUpdateUsuario(usuario: Usuario) {
    this.editarUsuario = usuario;
    document.getElementById('add-usuario-form')?.click();
    this.usuarioService.editarUsuario(usuario).subscribe({
      next: (response: Usuario) => {
        console.log(response);
        this.getUsuario();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  public onDeleteUsuario(idEdu: number): void {
    this.usuarioService.deleteUsuario(idEdu).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getUsuario();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}

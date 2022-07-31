import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario, UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css'],
  providers: [UsuarioService],
})
export class LogoAPComponent implements OnInit {
  public usuarios: Usuario[] = [];
  public get usuarioService(): UsuarioService {
    return this._usuarioService;
  }
  public set usuarioService(value: UsuarioService) {
    this._usuarioService = value;
  }

  constructor(private _usuarioService: UsuarioService) {}

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
}

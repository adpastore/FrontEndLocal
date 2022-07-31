import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiServerUrl = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) {}

  public getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiServerUrl);
  }
  public addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiServerUrl, usuario);
  }
  public editarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.apiServerUrl, usuario);
  }
  public deleteUsuario(usuarioId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${usuarioId}`);
  }
  public updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.apiServerUrl, usuario);
  }
}

export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  titulo: string;
  fotoPerfil: string;
  acerca: string;
  acercas: string;
  acercas2: string;
  telefono: number;
  mail: string;
  facebook: string;
  linkedin: string;
  github: string;
  instagram: string;
  imagen: string;
}

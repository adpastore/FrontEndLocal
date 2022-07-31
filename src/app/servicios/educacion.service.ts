import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  private apiServerUrl = 'http://localhost:8080/api/educacion';

  constructor(private http: HttpClient) {}

  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.apiServerUrl);
  }
  public editarEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(this.apiServerUrl, educacion);
  }
  public addEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(this.apiServerUrl, educacion);
  }
  public deleteEducacion(educacionId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${educacionId}`);
  }
}
export interface Educacion {
  idEdu: number;
  tituloEdu: string;
  descEdu: string;
  imagenEdu: string;
  fechaIniEdu: Date;
  fechaFinEdu: Date;
  sedeEdu: string;
}

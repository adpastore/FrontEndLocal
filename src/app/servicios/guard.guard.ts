import { Autenticacionservice } from './autenticacion.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(
    private autenticacionServicio: Autenticacionservice,
    private rutas: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let currentUser = this.autenticacionServicio.UsuarioAutenticado;
    if (currentUser && currentUser.accesToken) {
      return true;
    } else {
      console.log('USUARIO ACTUAL' + currentUser.accessToken);
      this.rutas.navigate(['/iniciar-sesion']);
      return false;
    }
  }
}

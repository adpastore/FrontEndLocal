import { InterceptorService } from './servicios/interceptor.service';
import { PorfolioService } from './servicios/portfolio.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoAPComponent } from './component/logo-ap/logo-ap.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PotenciasComponent } from './component/potencias/potencias.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoAPComponent,
    HeaderComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    PotenciasComponent,
    FooterComponent,
    UsuarioComponent,
    IniciarSesionComponent,
    PortfolioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    PorfolioService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

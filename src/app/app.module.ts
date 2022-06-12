import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-project/header/header.component';
import { PageNotFoundComponent } from './app-project/page-not-found/page-not-found.component';
import { ExerciseAuthInterceptorService } from './esercizi-base/http-18/exercise-auth-interceptor.service';
import { ExerciseSecondInterceptorRespService } from './esercizi-base/http-18/exercise-second-interceptor-resp.service';
import { AuthInterceptorService } from './app-project/auth/auth-interceptor.service';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
    // RecipeModule, // se si carica in lazyloading, il modulo non si deve aggiungere negli imports
  ],
  providers: [ // posso anche mettere tutti i providers in un modulo chiamato CoreModule, per i providers non si usa l'exports nel modulo
    // exercise primo intercettore
    { provide: HTTP_INTERCEPTORS, useClass: ExerciseAuthInterceptorService, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}, // inserisce il token
    { provide: HTTP_INTERCEPTORS, useClass: ExerciseSecondInterceptorRespService, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { Routes } from '@angular/router';

import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { RegisterViewComponent } from './views/register-view/register-view.component';
import { MisViajesViewComponent } from './views/mis-viajes-view/mis-viajes-view.component';
import { InfoViajeViewComponent } from './views/info-viaje-view/info-viaje-view.component';
//import de las demás views

export const routes: Routes = [
    {path: "", component: LandingViewComponent},//Ruta cuando el usuario haga una petición al puerto general
    {path: "home", component: HomeViewComponent},
    {path: "login", component: LoginViewComponent},
    {path: "register", component: RegisterViewComponent},
    {path: "info-viaje", component: InfoViajeViewComponent},
    {path: "mis-viajes", component: MisViajesViewComponent}
];

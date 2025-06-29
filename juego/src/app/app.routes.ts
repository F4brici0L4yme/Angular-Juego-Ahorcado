import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { JuegoAhorcado } from './juego-ahorcado/juego-ahorcado';
import { Resultado } from './resultado/resultado';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'juego', component: JuegoAhorcado },
    { path: 'resultado', component: Resultado },
];
